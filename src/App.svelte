<script>
  import Router from "svelte-spa-router";
  import FetchPokemonData from "./FetchPokemonData.svelte";
  import routes from "./routes";
  export let url;
  export let appTitle;
  export let appDescription;
</script>

<!-- Component Markup -->
<main>
  <article>
    <section class="section-introduction">
      <h1 class="grid-title">{appTitle}</h1>
      <p class="grid-description">{appDescription}</p>
    </section>
    <FetchPokemonData baseUrl={url} />
  </article>

  <Router {routes} />

</main>
