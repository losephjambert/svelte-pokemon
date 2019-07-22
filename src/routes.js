import Detail from "./routes/Detail.svelte";
import Home from "./routes/Home.svelte";

export default {
  // Exact path
  "/": Home,

  "/detail/:name": Detail
};
