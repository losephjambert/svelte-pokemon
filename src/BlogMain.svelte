<script>
  import FetchPokemonData from "./FetchPokemonData.svelte";
</script>

<style>
  /* p {
    font-size: 1em;
    line-height: 1.2em;
    max-width: 500px;
    margin: 0 auto;
    padding: 0;
    text-align: center;
  } */
</style>

<!-- Component Markup -->
<main>
  <FetchPokemonData url={'https://pokeapi.co/api/v2/pokemon/'} />
</main>
