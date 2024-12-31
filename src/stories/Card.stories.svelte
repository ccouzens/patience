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
        control: { type: "number", min: 1, max: 13 },
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      },
    },
    args: {
      faceUp: true,
    },
  });
</script>

<Story name="Ace of Spades" args={{ rank: 1, suit: "spades" }} />
