/**
 * 홈 화면 왼쪽 메뉴에 뜨는 장르 목록.
 *
 * 장르를 바꾸고 싶으면 이 배열만 고치면 된다.
 * - 순서를 바꾸면 메뉴 순서가 바뀐다
 * - 항목을 추가/삭제하면 메뉴도 따라 바뀐다
 * - id 는 주소창에 들어가는 값(?genre=puzzle), label 은 화면에 보이는 이름
 *
 * id 를 지우거나 바꾸면 games.ts 에서 그 id 를 쓰던 게임이
 * 타입 오류로 바로 잡히므로, 빠뜨리고 넘어갈 일은 없다.
 */
export const GENRES = [
  { id: "action", label: "액션" },
  { id: "shooting", label: "슈팅" },
  { id: "puzzle", label: "퍼즐" },
  { id: "strategy", label: "전략" },
  { id: "rpg", label: "RPG·어드벤처" },
  { id: "arcade", label: "아케이드" },
  { id: "racing", label: "레이싱" },
  { id: "casual", label: "캐주얼" },
  { id: "roguelike", label: "로그라이크" },
] as const;

export type GenreId = (typeof GENRES)[number]["id"];

/** 전체 보기를 나타내는 값. 장르 id 로는 쓸 수 없다. */
export const ALL_GENRES = "all";

export function genreLabel(id: string): string {
  return GENRES.find((g) => g.id === id)?.label ?? "전체 게임";
}

/** 주소창에서 읽은 값이 실제 장르인지 확인한다. 아니면 전체 보기로 되돌린다. */
export function normalizeGenre(value: string | null): GenreId | typeof ALL_GENRES {
  const found = GENRES.find((g) => g.id === value);
  return found ? found.id : ALL_GENRES;
}
