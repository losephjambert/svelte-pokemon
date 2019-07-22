import BlogMain from "./BlogMain.svelte";

const pokemonApp = new BlogMain({
  target: document.getElementById("svelte-app"),
  props: {
    url: "https://pokeapi.co/api/v2/pokemon/",
    appTitle: "Pokemon app",
    appDescription: "an app to explore pokemon"
  }
});

export { pokemonApp };
