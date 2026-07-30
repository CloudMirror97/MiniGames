"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "게임 전체", href: "#games" },
  { label: "인기 게임", href: "#games" },
  { label: "소개", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-bg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border-[3px] border-ink bg-primary text-lg font-black text-white">
            P
          </span>
          <span className="text-xl font-black tracking-tight">플레이박스</span>
        </Link>

        {/* PC 메뉴 */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-ink-soft hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#games"
            className="sticker-sm rounded-lg bg-yellow px-4 py-2 text-sm font-black text-yellow-ink"
          >
            지금 플레이
          </a>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border-[3px] border-ink md:hidden"
        >
          <span className="sr-only">메뉴</span>
          <div className="flex w-5 flex-col gap-1">
            <span
              className={`h-[3px] bg-ink transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[3px] bg-ink transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[3px] bg-ink transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* 모바일 메뉴 패널 */}
      {open && (
        <nav className="flex flex-col gap-1 border-t-[3px] border-ink bg-bg px-5 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base font-bold text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#games"
            onClick={() => setOpen(false)}
            className="sticker-sm mt-2 rounded-lg bg-yellow px-4 py-3 text-center text-base font-black text-yellow-ink"
          >
            지금 플레이
          </a>
        </nav>
      )}
    </header>
  );
}
