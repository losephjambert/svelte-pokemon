<script>
  export let params = {};
  export let detailData;
</script>

<style>
  .container-detail {
    position: fixed;
    top: 15vh;
    right: 10vw;
    bottom: 15vh;
    left: 10vw;
  }
</style>

<section class="container-detail">
  <p id="nameparams">This pokemon's name is {params.name}</p>
</section>
