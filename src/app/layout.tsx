import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "플레이박스 — 무료 미니게임 모음",
  description:
    "설치 없이 바로 즐기는 무료 미니게임 모음. 테트리스, 점프맵부터 매주 새로 올라오는 게임까지, 플레이박스에서 즐겨보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
