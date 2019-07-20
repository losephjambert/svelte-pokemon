<script>
  export let title;
  export let description;
  export let type = "";
</script>

<style>
  .content-intro-block {
    min-height: 450px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 5vmin;
    background-color: papayawhip;

    position: relative;
  }
  .content-intro-block::after {
    content: "";
    width: 99%;
    height: 5px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 1);
    position: absolute;
    bottom: 4px;
    z-index: -100;
  }

  h1 {
    font-size: 2.5em;
    text-align: center;
    color: rebeccapurple;
  }

  p {
    font-size: 1em;
    line-height: 1.2em;
    max-width: 500px;
    margin: 0 auto;
    padding: 0;
    text-align: center;
  }
</style>

<!-- Component Markup -->
<div class="content-intro-block">
  <h1>{title} {type.length > 0 ? 'about ' : ''} {type}</h1>
  <p>{description}</p>
</div>
