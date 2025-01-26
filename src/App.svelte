<script lang="ts">
import Counter from "./lib/Counter.svelte";
import Game from "./Game.svelte";
import { cards } from "./Card";
import { newGame } from "./Game";
const game = newGame();
</script>

<main>
    <Game {...game} />
</main>

<style>
</style>
