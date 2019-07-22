import App from "./App.svelte";

const pokemonApp = new App({
  target: document.getElementById("svelte-app"),
  props: {
    url: "https://pokeapi.co/api/v2/pokemon/",
    appTitle: "Pokemon Explorer",
    appDescription: "an app to discover and explore known pokemon"
  }
});

export { pokemonApp };
