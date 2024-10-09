<script>
	export let data;
	import PostList from '$lib/components/PostList.svelte';
</script>

<h1 class="title">#{data.tag}</h1>

<PostList posts={data.posts} />

<style>
	.title {
		margin-bottom: 5rem;
	}
</style>
