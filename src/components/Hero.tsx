export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="flex flex-col items-start gap-6">
        <span className="sticker-sm rounded-full bg-mint px-4 py-1.5 text-xs font-black text-mint-ink md:text-sm">
          설치 없이, 로그인 없이 바로 시작
        </span>

        <h1 className="text-4xl font-black leading-[1.15] tracking-tight md:text-6xl">
          심심할 틈 없이,
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">플레이박스</span>
            <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-yellow md:bottom-2 md:h-5" />
          </span>
        </h1>

        <p className="max-w-xl text-base text-ink-soft md:text-lg">
          테트리스부터 점프맵까지, 광고 하나 없이 바로 즐기는 무료 미니게임
          모음. PC에서도, 폰에서도 똑같이 즐겨보세요.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#games"
            className="sticker rounded-xl bg-primary px-7 py-3.5 text-base font-black text-white md:text-lg"
          >
            게임 보러가기
          </a>
          <a
            href="#about"
            className="rounded-xl border-[3px] border-ink px-7 py-3.5 text-base font-black text-ink md:text-lg"
          >
            플레이박스란?
          </a>
        </div>
      </div>
    </section>
  );
}
