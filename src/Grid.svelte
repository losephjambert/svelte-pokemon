<script>
  // imports
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";
  import Link from "./Link.svelte";

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
    /* grid-gap: 10px; */
    row-gap: 50px;

    /* grid-template-columns: repeat(4, [col] 20%); */
    grid-template-columns: repeat(9, 10vw);
    /* justify-content: center; */
  }
  .grid-item {
    /* grid-column: span 3; */
    /* grid-row: 3/5; */
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
    <li>1 - {data.length} out of {count} pokemon</li>
    <li>(scroll for more)</li>
  </ul>
  <div class="grid grid-main">
    {#each data as item}
      <div class="grid-item">
        <Link href={`/detail/${item ? item.name : ''}`}>
          <Card data={item} />
        </Link>
      </div>
    {/each}
  </div>
  {#if next}
    <Button ref={next} text={'Next'} {handleClick} />
  {/if}
</section>
