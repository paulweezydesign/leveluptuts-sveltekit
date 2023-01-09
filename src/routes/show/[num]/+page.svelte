<script>
    export let data;
    $: ({episode} = data);
</script>


<div class="px-4">
<h1 class="text-3xl font-bold">{episode.title}</h1>
<p class="text-xl py-6">{episode.displayDate}</p>
<button >
    <a class=" " href="/"> Back</a>
</button>
<div class="prose-xl">
{@html episode.html}
</div>
</div>
<style>
    button {
        background-color: deeppink;
        color: white;
        border: none;
        border-radius: 2px;
        padding: .5rem 0.75rem;
        text-transform: uppercase;
        
    }
    :global(body.dark-mode) button {
        background-color: cyan;
        color: black;
    }
</style>