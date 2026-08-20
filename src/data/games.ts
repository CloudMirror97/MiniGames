import type { GenreId } from "./genres";

export type Game = {
  slug: string;
  title: string;
  tagline: string;
  tag: "신규" | "인기" | "준비중";
  color: "primary" | "mint" | "blue" | "yellow";
  /** 왼쪽 메뉴에서 어느 장르로 묶일지. 목록은 genres.ts 참고. */
  genre: GenreId;
  /**
   * 고정 크기로 만들어진 게임의 원래 픽셀 크기.
   * 지정하면 전체화면에서 이 크기를 기준으로 통째로 확대된다.
   * 화면 크기에 스스로 맞추는 게임은 생략한다.
   */
  size?: { width: number; height: number };
};

export const games: Game[] = [
  {
    slug: "ninja-dodge",
    title: "닌자 도망",
    tagline: "사방에서 날아오는 표창을 피하고 베어내기",
    tag: "신규",
    color: "primary",
    genre: "action",
    size: { width: 620, height: 500 },
  },
  {
    slug: "into-the-dungeon",
    title: "인투 더 던전",
    tagline: "5개 층을 뚫는 로그라이크 던전 슈터",
    tag: "신규",
    color: "blue",
    genre: "shooting",
    size: { width: 912, height: 612 },
  },
  {
    slug: "star-outpost",
    title: "스타 아웃포스트",
    tagline: "3종족 RTS · 싱글 & 온라인 멀티",
    tag: "신규",
    color: "blue",
    genre: "strategy",
  },
  {
    slug: "wildlands-survivor",
    title: "와일드랜드 서바이버",
    tagline: "5개 지역을 정복하고 용을 쓰러뜨려라",
    tag: "신규",
    color: "mint",
    genre: "rpg",
    size: { width: 910, height: 610 },
  },
  {
    slug: "escape-from-barkham",
    title: "Escape from Barkham",
    tagline: "버려진 지역을 탈출하여 주인으로 돌아가는 강아지의 이야기",
    tag: "신규",
    color: "yellow",
    genre: "rpg",
  },
  {
    slug: "the-narrow",
    title: "더 내로우",
    tagline: "빙하 틈을 통과하는 점 무리",
    tag: "신규",
    color: "blue",
    genre: "arcade",
  },
  {
    slug: "tetris",
    title: "테트리스",
    tagline: "떨어지는 블록을 쌓는 클래식 퍼즐",
    tag: "준비중",
    color: "primary",
    genre: "puzzle",
  },
  {
    slug: "2048",
    title: "2048",
    tagline: "숫자를 합쳐 2048을 만들어보세요",
    tag: "준비중",
    color: "mint",
    genre: "puzzle",
  },
  {
    slug: "omok",
    title: "오목",
    tagline: "다섯 개를 먼저 연결하면 승리",
    tag: "준비중",
    color: "mint",
    genre: "puzzle",
  },
  {
    slug: "jumpmap",
    title: "점프맵",
    tagline: "떨어지지 않고 끝까지 점프하기",
    tag: "준비중",
    color: "blue",
    genre: "action",
  },
  {
    slug: "flappy-block",
    title: "플래피 블록",
    tagline: "장애물을 피해 최고 기록에 도전",
    tag: "준비중",
    color: "yellow",
    genre: "arcade",
  },
  {
    slug: "speed-typing",
    title: "타자 대전",
    tagline: "친구와 실시간 타자 속도 대결",
    tag: "준비중",
    color: "primary",
    genre: "arcade",
  },
];
