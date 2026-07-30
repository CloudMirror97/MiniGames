export default function Footer() {
  return (
    <>
      <section
        id="about"
        className="border-t-[3px] border-ink bg-surface px-5 py-14 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-2xl font-black md:text-3xl">
            플레이박스는요
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            예전 플래시게임 사이트처럼, 부담 없이 들어와서 바로 즐기고 나가는
            공간을 만들고 싶었어요. 회원가입도, 다운로드도 필요 없어요.
            매주 새로운 미니게임을 추가하면서 계속 채워나갈 예정입니다.
          </p>
        </div>
      </section>

      <footer className="border-t-[3px] border-ink px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-ink-soft md:flex-row">
          <span className="font-black text-ink">플레이박스</span>
          <span>© {new Date().getFullYear()} PlayBox. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
