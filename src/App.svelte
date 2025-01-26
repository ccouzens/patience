<script lang="ts">
import Game from "./Game.svelte";
import { newGame } from "./Game";
const game = newGame();
</script>

<main>
    <Game {...game} />
</main>

<style>
</style>
