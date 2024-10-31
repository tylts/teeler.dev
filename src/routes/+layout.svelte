<script>
	export let data;
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	const tags = new Set([].concat(...data.allTags));
	import TagList from '$lib/components/TagList.svelte';
	import '$lib/styles/style.css';
</script>

<div class="layout">
	<Header class="header" />
	<aside class="all-tags-container">
		<div class="all-tags">
			<h2>All tags:</h2>
			<TagList {tags} />
		</div>
	</aside>
	<main>
		<slot />
	</main>
	<Footer class="footer" />
</div>
