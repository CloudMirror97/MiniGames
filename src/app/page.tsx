import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GameGrid from "@/components/GameGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* GameGrid 가 주소창의 ?genre= 값을 읽으므로 Suspense 로 감싸야 한다.
          (Next.js 에서 useSearchParams 를 쓰는 컴포넌트의 필수 조건) */}
      <Suspense
        fallback={
          <section className="mx-auto min-h-[480px] max-w-6xl px-5 py-14 md:py-20" />
        }
      >
        <GameGrid />
      </Suspense>
      <Footer />
    </main>
  );
}
