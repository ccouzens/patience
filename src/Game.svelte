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

const props = $props();
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
			calc(var(--z) * 2px)
		);
	}
</style>
