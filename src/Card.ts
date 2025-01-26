export type Suit = "clubs" | "diamonds" | "hearts" | "spades";
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
export const ranks: Rank[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
export const suits: Suit[] = ["clubs", "diamonds", "hearts", "spades"];
export const cards = ranks.flatMap((rank) =>
	suits.map((suit) => ({ suit, rank })),
);
