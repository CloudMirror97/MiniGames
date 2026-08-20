"use client";

import Link from "next/link";
import { ALL_GENRES, GENRES } from "@/data/genres";

type Props = {
  /** 지금 선택된 장르 id, 또는 "all" */
  active: string;
  /** 장르 id 별 게임 수. "all" 키에는 전체 개수가 들어온다. */
  counts: Record<string, number>;
  /** 메뉴가 펼쳐져 있는지 (PC 화면에서만 의미가 있다) */
  open: boolean;
  onToggle: () => void;
};

const items = [{ id: ALL_GENRES, label: "전체 게임" }, ...GENRES];

export default function GenreNav({ active, counts, open, onToggle }: Props) {
  return (
    <nav
      aria-label="장르"
      className={[
        "md:shrink-0 md:transition-[width] md:duration-200",
        open ? "md:w-48" : "md:w-12",
      ].join(" ")}
    >
      {/* 열고 닫기 버튼 — 모바일에서는 메뉴가 가로 칩으로 바뀌므로 숨긴다 */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls="genre-list"
        title={open ? "장르 메뉴 접기" : "장르 메뉴 펼치기"}
        className="mb-3 hidden h-10 w-full items-center gap-2 rounded-lg border-[3px] border-ink px-2 text-sm font-black text-ink transition-colors hover:bg-surface md:flex"
      >
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="shrink-0"
          aria-hidden="true"
        >
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
        {open && (
          <>
            <span className="flex-1 text-left">장르</span>
            <span aria-hidden="true" className="text-ink-soft">
              ‹
            </span>
          </>
        )}
        <span className="sr-only">
          {open ? "장르 메뉴 접기" : "장르 메뉴 펼치기"}
        </span>
      </button>

      {/* 모바일에서는 가로로 넘기는 칩, PC 에서는 세로 메뉴.
          PC 에서 접으면 목록만 숨고 위의 버튼은 남는다. */}
      <ul
        id="genre-list"
        className={[
          "-mx-5 flex gap-2 overflow-x-auto px-5 pb-1",
          "md:mx-0 md:flex-col md:gap-1.5 md:overflow-visible md:px-0 md:pb-0",
          open ? "md:flex" : "md:hidden",
        ].join(" ")}
      >
        {items.map((item) => {
          const selected = active === item.id;
          const count = counts[item.id] ?? 0;

          return (
            <li key={item.id} className="shrink-0 md:shrink">
              <Link
                href={item.id === ALL_GENRES ? "/" : `/?genre=${item.id}`}
                scroll={false}
                aria-current={selected ? "page" : undefined}
                className={[
                  "flex items-center justify-between gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-bold transition-colors",
                  selected
                    ? "border-[3px] border-ink bg-ink text-white"
                    : "border-[3px] border-transparent text-ink-soft hover:bg-surface hover:text-ink",
                ].join(" ")}
              >
                <span>{item.label}</span>
                <span
                  className={
                    selected ? "text-xs text-white/70" : "text-xs text-ink-soft/70"
                  }
                >
                  {count}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
