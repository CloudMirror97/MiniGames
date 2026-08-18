"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  title: string;
  /**
   * 고정 크기로 만들어진 게임의 원래 픽셀 크기.
   * 지정하면 그 크기 그대로 렌더링한 뒤 화면에 맞게 통째로 확대/축소한다.
   * 생략하면 화면 크기에 스스로 맞추는 반응형 게임으로 보고 영역을 꽉 채운다.
   */
  size?: { width: number; height: number };
};

export default function GameFrame({ src, title, size }: Props) {
  const shellRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [full, setFull] = useState(false);

  const enter = useCallback(() => {
    setFull(true);
    // 네이티브 전체화면이면 브라우저 UI까지 사라진다.
    // iOS 사파리처럼 지원하지 않는 환경에서는 실패하지만,
    // 아래 CSS 전체화면(fixed inset-0)만으로도 화면을 꽉 채운다.
    shellRef.current?.requestFullscreen?.().catch(() => {});
  }, []);

  const exit = useCallback(() => {
    setFull(false);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  // 고정 크기 게임을 현재 영역에 맞춰 확대/축소한다.
  useEffect(() => {
    if (!size) return;
    const stage = stageRef.current;
    if (!stage) return;

    const fit = () => {
      const { width, height } = stage.getBoundingClientRect();
      if (!width || !height) return;
      setScale(Math.min(width / size.width, height / size.height));
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(stage);
    return () => observer.disconnect();
  }, [size, full]);

  // ESC나 F11로 브라우저가 전체화면을 풀었을 때도 상태를 맞춰준다.
  useEffect(() => {
    const sync = () => {
      if (!document.fullscreenElement) setFull(false);
    };
    document.addEventListener("fullscreenchange", sync);
    return () => document.removeEventListener("fullscreenchange", sync);
  }, []);

  // 네이티브 전체화면이 아닌 환경에서도 ESC로 빠져나갈 수 있게 한다.
  useEffect(() => {
    if (!full) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") exit();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [full, exit]);

  // CSS 전체화면일 때 뒤쪽 페이지가 스크롤되지 않도록 잠근다.
  useEffect(() => {
    if (!full) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [full]);

  // 인라인일 때 프레임이 차지할 영역. 게임 비율은 지키되 화면 높이의 72%를
  // 넘지 않게 해서, 세로로 긴 게임이 페이지를 통째로 밀어내지 않도록 한다.
  const ratio = size ? size.width / size.height : 3 / 2;
  const inlineStyle = {
    width: "100%",
    maxWidth: `calc(72vh * ${ratio.toFixed(4)})`,
    aspectRatio: ratio.toFixed(4),
  };

  const frameProps = {
    src,
    title,
    // 게임이 자체 전체화면 버튼을 가지고 있는 경우(더 내로우 등)를 위해 허용한다.
    allow: "fullscreen; autoplay; gamepad",
    allowFullScreen: true,
  };

  return (
    <>
      {!full && (
        <div className="mb-3 flex justify-end">
          <button
            type="button"
            onClick={enter}
            className="sticker-sm rounded-lg bg-yellow px-4 py-2 text-sm font-black text-yellow-ink"
          >
            ⛶ 전체화면
          </button>
        </div>
      )}

      <div
        ref={shellRef}
        className={
          full
            ? "fixed inset-0 z-[100] bg-ink"
            : "sticker-static relative mx-auto overflow-hidden rounded-xl bg-surface"
        }
        style={full ? undefined : inlineStyle}
      >
        <div ref={stageRef} className="relative h-full w-full">
          {size ? (
            <iframe
              {...frameProps}
              style={{
                border: "none",
                position: "absolute",
                top: "50%",
                left: "50%",
                width: size.width,
                height: size.height,
                transform: `translate(-50%, -50%) scale(${scale})`,
                transformOrigin: "center center",
                // 배율이 정해지기 전 원래 크기가 잠깐 보이는 것을 막는다.
                visibility: scale ? "visible" : "hidden",
              }}
            />
          ) : (
            <iframe
              {...frameProps}
              className="h-full w-full"
              style={{ border: "none" }}
            />
          )}
        </div>

        {full && (
          <button
            type="button"
            onClick={exit}
            title="전체화면 끄기 (ESC)"
            aria-label="전체화면 끄기"
            className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-lg border-2 border-white/60 bg-black/60 text-white opacity-25 transition-opacity hover:opacity-100 focus-visible:opacity-100"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 3v6H3" />
              <path d="M15 3v6h6" />
              <path d="M9 21v-6H3" />
              <path d="M15 21v-6h6" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
}
