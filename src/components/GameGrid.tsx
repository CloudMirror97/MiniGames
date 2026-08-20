"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { games } from "@/data/games";
import { ALL_GENRES, GENRES, genreLabel, normalizeGenre } from "@/data/genres";
import GameCard from "./GameCard";
import GenreNav from "./GenreNav";

// 장르별 게임 수는 목록이 바뀌지 않는 한 항상 같으므로 한 번만 계산한다.
// 한 게임이 장르를 여러 개 가질 수 있으므로 각 장르 수의 합은 전체 개수보다 클 수 있다.
const counts: Record<string, number> = { [ALL_GENRES]: games.length };
for (const genre of GENRES) {
  counts[genre.id] = games.filter((game) =>
    game.genres.includes(genre.id),
  ).length;
}

const NAV_STORAGE_KEY = "playbox:genreNavOpen";

export default function GameGrid() {
  const params = useSearchParams();
  // 주소창에 이상한 값이 들어와도 전체 보기로 떨어지게 한다.
  const active = normalizeGenre(params.get("genre"));
  const visible =
    active === ALL_GENRES
      ? games
      : games.filter((game) => game.genres.includes(active));

  // 서버에서 그릴 때와 첫 렌더가 어긋나면 안 되므로 항상 열린 상태로 시작하고,
  // 브라우저에 올라온 뒤에 저장된 값을 반영한다.
  const [navOpen, setNavOpen] = useState(true);

  useEffect(() => {
    try {
      if (localStorage.getItem(NAV_STORAGE_KEY) === "closed") setNavOpen(false);
    } catch {
      // 저장소를 못 쓰는 환경이면 그냥 기본값(열림)으로 둔다.
    }
  }, []);

  const toggleNav = () => {
    setNavOpen((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(NAV_STORAGE_KEY, next ? "open" : "closed");
      } catch {
        // 저장 실패해도 동작에는 지장이 없다.
      }
      return next;
    });
  };

  return (
    <section id="games" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-black md:text-3xl">
          {active === ALL_GENRES ? "지금 즐길 수 있는 게임" : genreLabel(active)}
        </h2>
        <span className="hidden shrink-0 text-sm font-bold text-ink-soft md:block">
          {active === ALL_GENRES
            ? "매주 새 게임이 추가돼요"
            : `${visible.length}개의 게임`}
        </span>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        <GenreNav
          active={active}
          counts={counts}
          open={navOpen}
          onToggle={toggleNav}
        />

        <div className="min-w-0 flex-1">
          {visible.length > 0 ? (
            <div
              className={[
                "grid grid-cols-2 gap-4 md:gap-6",
                navOpen ? "lg:grid-cols-3" : "lg:grid-cols-4",
              ].join(" ")}
            >
              {visible.map((game) => (
                <GameCard key={game.slug} game={game} />
              ))}
            </div>
          ) : (
            <p className="py-10 text-center text-ink-soft">
              이 장르에는 아직 게임이 없어요.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
