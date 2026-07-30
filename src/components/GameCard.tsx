import Link from "next/link";
import type { Game } from "@/data/games";

const TAG_STYLES: Record<Game["tag"], string> = {
  신규: "bg-blue text-white",
  인기: "bg-primary text-white",
  준비중: "bg-ink text-white",
};

const ACCENT_STYLES: Record<Game["color"], string> = {
  primary: "bg-primary",
  mint: "bg-mint",
  blue: "bg-blue",
  yellow: "bg-yellow",
};

export default function GameCard({ game }: { game: Game }) {
  const isReady = game.tag !== "준비중";

  const content = (
    <div className="sticker flex h-full flex-col rounded-xl bg-surface p-5">
      <div
        className={`mb-4 flex h-28 items-center justify-center rounded-lg border-[3px] border-ink text-3xl font-black text-ink ${ACCENT_STYLES[game.color]}`}
        aria-hidden="true"
      >
        {game.title.slice(0, 1)}
      </div>
      <div className="mb-2 flex items-center gap-2">
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-black ${TAG_STYLES[game.tag]}`}
        >
          {game.tag}
        </span>
      </div>
      <h3 className="text-lg font-black">{game.title}</h3>
      <p className="mt-1 text-sm text-ink-soft">{game.tagline}</p>
    </div>
  );

  if (!isReady) {
    return <div className="h-full opacity-70">{content}</div>;
  }

  return (
    <Link href={`/games/${game.slug}`} className="block h-full">
      {content}
    </Link>
  );
}
