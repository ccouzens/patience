<script lang="ts">
import { type CardProps } from "./Card.svelte";
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

<pre>
	{JSON.stringify(props, null, 2)}
</pre>
