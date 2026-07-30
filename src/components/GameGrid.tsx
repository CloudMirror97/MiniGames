import { games } from "@/data/games";
import GameCard from "./GameCard";

export default function GameGrid() {
  return (
    <section id="games" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-black md:text-3xl">지금 즐길 수 있는 게임</h2>
        <span className="hidden text-sm font-bold text-ink-soft md:block">
          매주 새 게임이 추가돼요
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {games.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </section>
  );
}
