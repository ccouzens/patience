<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Card from "./../Card.svelte";
  import { fn } from "@storybook/test";

  const { Story } = defineMeta({
    component: Card,
    tags: ["autodocs"],
    argTypes: {
      suit: {
        control: { type: "select" },
      },
      rank: {
        control: { type: "select" },
      },
    },
    args: {
      faceUp: true,
    },
  });
</script>

<Story name="Ace of Spades" args={{ rank: 1, suit: "spades" }} />
