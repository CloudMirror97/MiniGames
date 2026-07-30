import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GameGrid from "@/components/GameGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <GameGrid />
      <Footer />
    </main>
  );
}
