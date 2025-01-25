<script lang="ts">
import Card, { type CardProps } from "./Card.svelte";
interface Props {
	/** Top left, cards available to draw */
	stock: CardProps[];
	/** 7 groups of cards on the table */
	tableau: [
		CardProps[],
		CardProps[],
		CardProps[],
		CardProps[],
		CardProps[],
		CardProps[],
		CardProps[],
	];
	/** 4 groups of ordered cards in the top right */
	foundations: [CardProps[], CardProps[], CardProps[], CardProps[]];
	/** Cards that have been drawn from the stock */
	waste: CardProps[];
}

const props: Props = $props();

const tableauHiddens = $derived.by(() => {
	return props.tableau.map((stack) => {
		let i = 0;
		for (const c of stack) {
			if (c.faceUp) {
				break;
			}
			i++;
		}
		return i;
	});
});
</script>

<div class="game">
	{#each props.stock as card, index (`${card.suit}-${card.rank}`)}
		<span class="card" style={`--major-y: 0; --x: 0; --z: ${index};`}>
			<Card {...card} />
		</span>
	{/each}
	{#each props.waste as card, index (`${card.suit}-${card.rank}`)}
		<span class="card" style={`--major-y: 0; --x: 1; --z: ${index};`}>
			<Card {...card} />
		</span>
	{/each}
	{#each props.tableau as stack, i}
		{#each stack as card, j (`${card.suit}-${card.rank}`)}
			<span
				class="card"
				style={`--major-y:1; --x:${i}; --tableau-down:${Math.min(j, tableauHiddens[i])};--tableau-up:${Math.max(0, j - tableauHiddens[i])}`}
			>
				<Card {...card} />
			</span>
		{/each}
	{/each}
	{#each props.foundations as stack, i}
		{#each stack as card, j (`${card.suit}-${card.rank}`)}
			<span class="card" style={`--major-y:0;--x:${i + 3};--z:${j};`}>
				<Card {...card} />
			</span>
		{/each}
	{/each}
</div>

<style>
	.game {
		position: relative;
		--z: 0;
		--tableau-down: 0;
		--tableau-up: 0;
	}
	.card {
		position: absolute;
		left: 0;
		top: 0;
		transform: translate(
			calc(var(--z) * 2px + var(--x) * 100px),
			calc(
				var(--z) * 2px + var(--major-y) * 100px + var(--tableau-down) *
					5px + var(--tableau-up) * 20px
			)
		);
	}
</style>
