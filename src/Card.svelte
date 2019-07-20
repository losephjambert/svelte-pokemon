<script>
  // props
  export let data;
</script>

<style>
  .card {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    border: 2px solid black;
    min-height: 175px;
  }
  .card-title {
    width: 100%;
    order: 2;
  }
  .card-title > h1 {
    text-transform: capitalize;
    font-size: 2em;
    margin: 0;
    background-color: black;
    color: white;
    text-align: center;
    width: 100%;
  }
  .card-image {
    margin-top: 15px;
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
