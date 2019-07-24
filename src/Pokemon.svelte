<script>
  // imports
  import { onMount } from "svelte";
  import { pokemon } from "./stores";
  import Grid from "./Grid.svelte";

  // props
  export let baseUrl = "";

  // when the component mounts, call the pokemon store "fetch" method
  onMount(async () => pokemon.fetch(baseUrl));
</script>

<Grid />
