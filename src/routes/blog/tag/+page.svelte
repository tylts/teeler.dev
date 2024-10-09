<script>
	export let data;
	const tags = new Set([].concat(...data.allTags));
	import TagList from '$lib/components/TagList.svelte';
</script>

<h1>All tags:</h1>

<div class="tags">
	<TagList {tags} />
</div>

<style>
	.tags {
		margin-top: 5rem;
	}
</style>
