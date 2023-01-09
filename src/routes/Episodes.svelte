<script>

    export let episodes;
</script>
<nav>
    <ul class="animate-fade-in">
      {#each episodes as episode}
        <li>
          <a
            class="text-sky-500 underline decoration-pink-500"
            href={`/show/${episode.number}`}>{episode.title}</a
          >
        </li>
      {/each}
    </ul>
  </nav>