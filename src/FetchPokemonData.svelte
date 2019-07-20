<script>
  // imports
  import { onMount } from "svelte";
  import Grid from "./Grid.svelte";
  import axios from "axios";
  // props
  export let url = "";

  // component logic
  let hydratedPokemon = new Array(0);
  let results = [];

  const hydratePokemon = async url => {
    const data = await getSinglePokemon(url);
    let tempData = {};
    if (data.status === 200) {
      hydratedPokemon[data.data.id - 1] = data.data;
    }
  };

  const handlePokemon = async () => {
    const data = await getAllPokemon(url);

    if (data) {
      hydratedPokemon.length += data.data.results.length - 1;
      data.data.results.forEach(result => {
        hydratePokemon(result.url);
      });
      results = data.data.results;
    }
  };

  const getAllPokemon = async url => {
    try {
      return await axios.get(url);
    } catch (error) {
      console.error(error);
    }
  };

  const getSinglePokemon = async url => {
    try {
      return await axios.get(url);
    } catch (error) {
      console.error(error);
    }
  };

  onMount(async () => handlePokemon());
</script>

<style>
  h1.grid-title {
    font-size: 3em;
    text-align: center;
  }
  p.grid-description {
    text-align: center;
  }
  section.section-introduction {
    margin: 25px 0 100px;
  }
</style>

<article class="pokemon-list">
  <section class="section-introduction">
    <h1 class="grid-title">Pokemon</h1>
    <p class="grid-description">
      A list of all known pokemon, sorted by pokedex id.
    </p>
  </section>
  <ul>
    {#await hydratedPokemon}
      <li>waiting for pokemon to load...</li>
    {:then result}
      <li>
        <Grid data={result} />
      </li>
    {:catch error}
      <li>Something went wrong: {error.message}</li>
    {/await}
  </ul>
</article>
