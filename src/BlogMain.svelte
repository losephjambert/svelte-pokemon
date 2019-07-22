<script>
  import FetchPokemonData from "./FetchPokemonData.svelte";
</script>

<!-- Component Markup -->
<main>
  <article>
    <section class="section-introduction">
      <h1 class="grid-title">Pokemon</h1>
      <p class="grid-description">
        A list of all known pokemon, sorted by pokedex id.
      </p>
    </section>
    <FetchPokemonData baseUrl={'https://pokeapi.co/api/v2/pokemon/'} />
  </article>
</main>
