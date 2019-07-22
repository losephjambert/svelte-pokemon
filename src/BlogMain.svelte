<script>
  import FetchPokemonData from "./FetchPokemonData.svelte";
  export let url;
  export let appTitle;
</script>

<!-- Component Markup -->
<main>
  <article>
    {appTitle}
    <section class="section-introduction">
      <h1 class="grid-title">Pokemon</h1>
      <p class="grid-description">
        A list of all known pokemon, sorted by pokedex id.
      </p>
    </section>
    <FetchPokemonData baseUrl={url} />
  </article>
</main>
