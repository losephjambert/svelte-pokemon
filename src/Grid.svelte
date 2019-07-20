<script>
  // imports
  import Card from "./Card.svelte";

  // props
  export let data;

  // component logic
</script>

<style>
  .grid-container {
    display: grid;
    grid-gap: 10px;
    row-gap: 50px;
    grid-template-columns: repeat(4, [col] 20%);
    margin: auto;
    justify-content: center;
  }
</style>

<div class="grid-container">
  {#each data as item}
    <Card data={item} />
  {/each}
</div>
