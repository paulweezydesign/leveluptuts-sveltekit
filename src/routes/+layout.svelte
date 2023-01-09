<script>
  import "../app.postcss";
  import './styles.css';
  import ThemeToggle from "../lib/components/ThemeToggle.svelte";
  import Header from "./Header.svelte";
  import Footer from './Footer.svelte';
  import Episodes from "./Episodes.svelte";
  export let data;

  $: ({ all_episodes } = data);

</script>
<Header />

<ThemeToggle>
  Click me
</ThemeToggle>
<main class="">
	<div class="main">
<slot />
</div>
<aside>
<Episodes  episodes={all_episodes} />
</aside>
</main>
<Footer />
<style>
	main {
		display: grid;
		grid-template-columns:  300px 1fr;
		gap: 20px;
	}
	aside {
		order: -1;
	}
	:global(body) {
		background-color: #fff;
		color: #292929;
		transition: background-color 0.3s
	}
	:global(body.dark-mode) {
		background-color: #292929;
		color: #fff;
	}
</style>