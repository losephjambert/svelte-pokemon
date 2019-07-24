<script>
  // imports
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";
  import Link from "./Link.svelte";

  // store test
  // store test
  import { pokemon } from "./stores";
  console.log(pokemon.count());
  // props
  export let data;
  export let count;
  export let previous;
  export let next;
  export let handleClick;
</script>

<style>
  .grid {
    display: grid;
  }
  .grid-main {
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: center;
  }
  .grid-item {
    height: 300px;
  }
  ul {
    margin: 0 0 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li {
    text-align: center;
    display: inline-block;
  }
  li:first-child {
    margin-right: 5px;
  }
</style>

<section>
  <ul>
    <li>1 - {$pokemon.length} out of {count} pokemon</li>
    <li>(scroll for more)</li>
  </ul>
  <div class="grid grid-main">
    {#each $pokemon as item}
      <div class="grid-item" style={`order: ${item.id}`}>
        <Link href={`/detail/${item ? item.name : ''}/${item ? item.id : ''}`}>
          <Card data={item} />
        </Link>
      </div>
    {/each}
  </div>
  {#if next}
    <Button ref={next} text={'Next'} {handleClick} />
  {/if}
</section>
