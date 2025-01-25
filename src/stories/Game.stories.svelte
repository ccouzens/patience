<script module lang="ts">
import Game from "./../Game.svelte";
import { fn } from "@storybook/test";
import { defineMeta } from "@storybook/addon-svelte-csf";

const { Story } = defineMeta({
	component: Game,
	tags: ["autodocs"],
	argTypes: {},
	args: {},
});
</script>

<Story
	name="Example"
	args={{
		stock: [
			{ suit: "clubs", rank: 7, faceUp: false },
			{ suit: "hearts", rank: 2, faceUp: false },
			{ suit: "clubs", rank: 12, faceUp: false },
			{ suit: "spades", rank: 3, faceUp: false },
			{ suit: "diamonds", rank: 12, faceUp: false },
		],
		waste: [
			{ suit: "clubs", rank: 10, faceUp: true },
			{ suit: "diamonds", rank: 4, faceUp: true },
			{ suit: "clubs", rank: 13, faceUp: true },
		],
		tableau: [
			[
				{ suit: "hearts", rank: 9, faceUp: true },
				{ suit: "clubs", rank: 8, faceUp: true },
				{ suit: "diamonds", rank: 7, faceUp: true },
				{ suit: "spades", rank: 6, faceUp: true },
				{ suit: "diamonds", rank: 5, faceUp: true },
				{ suit: "spades", rank: 4, faceUp: true },
			],
			[
				{ suit: "spades", rank: 13, faceUp: true },
				{ suit: "hearts", rank: 12, faceUp: true },
				{ suit: "clubs", rank: 11, faceUp: true },
				{ suit: "hearts", rank: 10, faceUp: true },
				{ suit: "spades", rank: 9, faceUp: true },
				{ suit: "hearts", rank: 8, faceUp: true },
				{ suit: "spades", rank: 7, faceUp: true },
				{ suit: "diamonds", rank: 6, faceUp: true },
				{ suit: "spades", rank: 5, faceUp: true },
			],
			[
				{ suit: "hearts", rank: 1, faceUp: false },
				{ suit: "hearts", rank: 6, faceUp: true },
				{ suit: "clubs", rank: 5, faceUp: true },
			],
			[
				{ suit: "spades", rank: 2, faceUp: false },
				{ suit: "hearts", rank: 11, faceUp: false },
				{ suit: "diamonds", rank: 13, faceUp: true },
			],
			[
				{ suit: "spades", rank: 11, faceUp: true },
				{ suit: "diamonds", rank: 10, faceUp: true },
				{ suit: "clubs", rank: 9, faceUp: true },
				{ suit: "diamonds", rank: 8, faceUp: true },
			],
			[
				{ suit: "hearts", rank: 13, faceUp: true },
				{ suit: "spades", rank: 12, faceUp: true },
				{ suit: "diamonds", rank: 11, faceUp: true },
				{ suit: "spades", rank: 10, faceUp: true },
				{ suit: "diamonds", rank: 9, faceUp: true },
				{ suit: "spades", rank: 8, faceUp: true },
				{ suit: "hearts", rank: 7, faceUp: true },
				{ suit: "clubs", rank: 6, faceUp: true },
				{ suit: "hearts", rank: 5, faceUp: true },
				{ suit: "clubs", rank: 4, faceUp: true },
				{ suit: "hearts", rank: 3, faceUp: true },
			],
			[{ suit: "hearts", rank: 4, faceUp: true }],
		],
		foundations: [
			[{ suit: "spades", rank: 1, faceUp: true }],
			[
				{ suit: "clubs", rank: 1, faceUp: true },
				{ suit: "clubs", rank: 2, faceUp: true },
				{ suit: "clubs", rank: 3, faceUp: true },
			],
			[],
			[
				{ suit: "diamonds", rank: 1, faceUp: true },
				{ suit: "diamonds", rank: 2, faceUp: true },
				{ suit: "diamonds", rank: 3, faceUp: true },
			],
		],
	}}
/>
