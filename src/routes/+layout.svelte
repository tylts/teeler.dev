<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/style.css';
</script>

<Header class="header" />

<main>
	<slot />
</main>

<Footer class="footer" />
