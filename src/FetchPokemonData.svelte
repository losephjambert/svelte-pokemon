<script>
  // imports
  import { onMount } from "svelte";
  import Grid from "./Grid.svelte";
  import axios from "axios";

  // store test
  import { pokemon } from "./stores";

  // props
  export let baseUrl = "";

  // component logic
  let hydratedPokemon = new Array(0);
  let results = [];
  let nextLink = null;
  let previousLink = null;
  let pokemonCount = null;

  const hydratePokemon = async url => {
    const data = await getSinglePokemon(url);
    let tempData = {};
    if (data.status === 200) {
      hydratedPokemon[data.data.id - 1] = data.data;
    }
  };

  const handlePokemon = async url => {
    const data = await getAllPokemon(url);

    if (data) {
      hydratedPokemon.length += data.data.results.length - 1;
      data.data.results.forEach(result => {
        hydratePokemon(result.url);
      });
      results = data.data.results;
      nextLink = data.data.next;
      previousLink = data.data.previous;
      pokemonCount = data.data.count;
      pokemon.add(1);
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

  const handleNext = (event, ref) => {
    // grab the next set of pokemon
    handlePokemon(ref);
  };

  onMount(async () => handlePokemon(baseUrl));
</script>

<ul>
  {#await hydratedPokemon}
    <li>waiting for pokemon to load...</li>
  {:then result}
    <li>
      <Grid
        data={result}
        previous={previousLink}
        next={nextLink}
        count={pokemonCount}
        handleClick={handleNext} />
    </li>
  {:catch error}
    <li>Something went wrong: {error.message}</li>
  {/await}
</ul>
