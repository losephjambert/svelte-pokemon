<script>
  // props
  export let data;
</script>

<style>
  .card {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: center;
    border: 2px solid black;
    min-height: 175px;
    height: inherit;
  }
  .card-title {
    width: 100%;
    order: 2;
  }
  .card-title > h1 {
    text-transform: capitalize;
    font-size: 1.6em;
    margin: 0;
    padding: 10px 0;
    background-color: black;
    color: white;
    text-align: center;
    width: 100%;
  }
  .card-image {
    width: 100%;
    margin-bottom: auto;
    margin-top: 25px;
  }
  img {
    display: block;
    width: 200px;
    margin: auto;
  }
</style>

{#if data}
  <ul class="grid-item card">
    <li class="card-title">
      <h1>{data.name}</h1>
    </li>
    <li class="card-image">
      <img
        src={data.sprites.front_default}
        alt={`main sprite of ${data.name}`} />
    </li>
  </ul>
{/if}
