<script lang="ts">
import Game from "./Game.svelte";
import { newGame } from "./Game";
let game = $state(newGame());

$effect(() => {
	const interval = setInterval(() => {
		game = newGame();
	}, 2000);

	return () => {
		clearInterval(interval);
	};
});
</script>

<main>
    <Game {...game} />
</main>

<style>
</style>
