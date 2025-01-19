<script lang="ts">
type Suit = "clubs" | "diamonds" | "hearts" | "spades";
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
const cardBackChar = "🂠";
const suitChars: Record<Suit, number> = {
	clubs: 0x1f0d0,
	diamonds: 0x1f0c0,
	hearts: 0x1f0b0,
	spades: 0x1f0a0,
};

const toUnicode = ({ suit, rank }: { suit: Suit; rank: Rank }) => {
	const ace = suitChars[suit];
	return String.fromCodePoint(ace + rank + (rank >= 12 ? 1 : 0));
};
const graphics = import.meta.glob("./cards/*.svg", { as: "url", eager: true });

export interface CardProps {
	/** The suit of the card */
	suit: Suit;
	/** The rank of the card. Aces are 1 and Kings are 13 */
	rank: Rank;
	/** Is the rank and suit visible to the user (`true`) or is the back of the card visible to the user (`false`). */
	faceUp: boolean;
}

const { suit, rank, faceUp }: CardProps = $props();
const char = $derived(faceUp ? toUnicode({ suit, rank }) : cardBackChar);
const src = $derived(
	faceUp ? graphics[`./cards/${rank}${suit}.svg`] : graphics["./cards/1B.svg"],
);
</script>

<img src={src} alt={char} />

<style>
</style>
