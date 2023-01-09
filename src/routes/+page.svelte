<script>
  export let data;

  $: ({ latest_episode } = data);
</script>

<div class="px-4">
  <h3 class="text-3xl font-bold animate-scale-up-center ">{latest_episode.title}</h3>
  <p class="text-xl my-3">{latest_episode.displayDate}</p>

 
</div>

<style>
  :global(body.dark-mode) h1 {
    color: rebeccapurple;
  }
</style>
