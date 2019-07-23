<script>
  import { link } from "svelte-spa-router";
  export let href;
</script>

<style>
  .link {
    display: block;
    height: inherit;
  }
</style>

<a class="link" {href} use:link>
  <slot>no content was provided</slot>
</a>
