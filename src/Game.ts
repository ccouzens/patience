import { shuffle } from "fast-shuffle";
import { cards } from "./Card";
import type { Props as GameProps } from "./Game.svelte";

export function newGame(): GameProps {
	const shuffled = shuffle(cards);
	const takeOneFaceUp = () => {
		const last = shuffled.pop();
		if (!last) {
			throw "Expected an item";
		}
		return { ...last, faceUp: true };
	};
	const takeSome = (count: number, faceUp: boolean) =>
		shuffled.splice(shuffled.length - count).map((c) => ({ ...c, faceUp }));
	return {
		stock: takeSome(24, true),
		tableau: [
			[takeOneFaceUp()],
			[...takeSome(1, false), takeOneFaceUp()],
			[...takeSome(2, false), takeOneFaceUp()],
			[...takeSome(3, false), takeOneFaceUp()],
			[...takeSome(4, false), takeOneFaceUp()],
			[...takeSome(5, false), takeOneFaceUp()],
			[...takeSome(6, false), takeOneFaceUp()],
		],
		foundations: [[], [], [], []],
		waste: [],
	};
}
