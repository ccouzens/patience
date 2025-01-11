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
	{#each props.stock as card (`${card.suit}-${card.rank}`)}
		<span>
		<Card {...card} />
		</span>
	{/each}
	{#each props.waste as card (`${card.suit}-${card.rank}`)}
		<span>
		<Card {...card} />
		</span>
	{/each}
	{JSON.stringify(props, null, 2)}
</div>

<style>
	.game {
	position: relative;
	}
	.game > span {
	font-size: 5em;
	}
</style>
