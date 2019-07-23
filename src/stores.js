import { writable } from "svelte/store";

function appendPokemon() {
  const { subscribe, update } = writable([]);

  return {
    subscribe,
    add: payload => update(p => [...p, payload])
  };
}

export const pokemon = appendPokemon();
