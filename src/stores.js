import { writable } from "svelte/store";
import axios from "axios";

const fetchData = async url => {
  try {
    return await axios.get(url);
  } catch (error) {
    console.error(error);
  }
};

function fetchPokemon() {
  const { subscribe, update, set } = writable([]);

  const hydratePokemon = async url => {
    const data = await fetchData(url);
    if (data.status === 200) {
      update(p => [...p, data.data]);
    }
  };

  const handlePokemon = async url => {
    const data = await fetchData(url);
    if (data) {
      data.data.results.forEach(result => {
        hydratePokemon(result.url);
      });
    }
  };

  return {
    subscribe,
    fetch: url => {
      console.log("pokemon store add. url to fetch: ", url);
      handlePokemon(url);
    },
    count: () => 5
  };
}

export const pokemon = fetchPokemon();
