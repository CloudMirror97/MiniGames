import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { games } from "@/data/games";

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);

  if (!game) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <Link
          href="/#games"
          className="mb-6 inline-block text-sm font-bold text-ink-soft hover:text-ink"
        >
          ← 게임 목록으로
        </Link>

        <h1 className="mb-2 text-3xl font-black md:text-4xl">{game.title}</h1>
        <p className="mb-6 text-ink-soft">{game.tagline}</p>

        {game.tag !== "준비중" ? (
          <div className="sticker overflow-hidden rounded-xl bg-surface">
            <iframe
              src={`/games/${game.slug}/index.html`}
              className="aspect-[10/7] w-full"
              style={{ border: "none" }}
              title={game.title}
            />
          </div>
        ) : (
          <div className="sticker flex aspect-video w-full items-center justify-center rounded-xl bg-surface">
            <p className="text-center text-ink-soft">
              게임 콘텐츠 준비중입니다.
              <br />
              여기에 실제 게임 파일(iframe/캔버스)이 들어갈 자리예요.
            </p>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
