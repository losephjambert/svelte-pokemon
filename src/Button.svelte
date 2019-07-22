<script>
  export let ref;
  export let text;
  export let handleClick;
</script>

<style>
  .button {
  }
</style>

<button class="button" type="button" on:click={e => handleClick(e, ref)}>
  {#if text}{text}{/if}
</button>
