<script>
  export let tags;
  export let type;
</script>

<style>
  ul {
    list-style-type: none;
  }

  li {
    font-size: 0.75em;
    display: inline-flex;
    margin: 0 2px;
    padding: padding;
  }
  li.tag {
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0);
  }
  li.tag:hover {
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 1);
  }
  li.tag.bold-text {
    font-weight: 700;
  }
</style>

<!-- Component Markup -->
<ul>
  {#each tags as tag}
    <li
      class={tag.toUpperCase() === type.toUpperCase() ? 'tag bold-text' : 'tag'}>
      <a href={`posts/type?=${tag}`}>{tag}</a>
    </li>
  {/each}
</ul>
