<script>
  export let params = {};
  export let detailData;
  import { pokemon } from "../stores";
  const data = $pokemon.filter(p => p.id === parseInt(params.id))[0];
</script>

<style>
  .container-detail {
    position: fixed;
    top: 20vh;
    right: 20vw;
    bottom: 20vh;
    left: 20vw;
    background-color: white;
    border: 3px solid black;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(1, 100%);
    justify-items: center;
  }
  li > img {
    width: 100%;
  }
  .flip > img {
    transform: scaleX(-1);
  }
</style>

{console.log(data)}
<section class="container-detail">
  <h1>This pokemon's name is {params.name}</h1>
  <ul>
    <li class="one">
      <img src={data.sprites.front_default} alt="" />
    </li>
  </ul>
</section>
