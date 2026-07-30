export type Game = {
  slug: string;
  title: string;
  tagline: string;
  tag: "신규" | "인기" | "준비중";
  color: "primary" | "mint" | "blue" | "yellow";
};

export const games: Game[] = [
  {
    slug: "tetris",
    title: "테트리스",
    tagline: "떨어지는 블록을 쌓는 클래식 퍼즐",
    tag: "인기",
    color: "primary",
  },
  {
    slug: "2048",
    title: "2048",
    tagline: "숫자를 합쳐 2048을 만들어보세요",
    tag: "인기",
    color: "mint",
  },
  {
    slug: "jumpmap",
    title: "점프맵",
    tagline: "떨어지지 않고 끝까지 점프하기",
    tag: "신규",
    color: "blue",
  },
  {
    slug: "flappy-block",
    title: "플래피 블록",
    tagline: "장애물을 피해 최고 기록에 도전",
    tag: "신규",
    color: "yellow",
  },
  {
    slug: "speed-typing",
    title: "타자 대전",
    tagline: "친구와 실시간 타자 속도 대결",
    tag: "준비중",
    color: "primary",
  },
  {
    slug: "omok",
    title: "오목",
    tagline: "다섯 개를 먼저 연결하면 승리",
    tag: "준비중",
    color: "mint",
  },
];
