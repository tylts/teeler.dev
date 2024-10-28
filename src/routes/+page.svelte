<script>
	export let data;
	import PostList from '$lib/components/PostList.svelte';
</script>

<svelte:head>
	<title>Tyler Cave - Software Developer</title>
</svelte:head>

<div class="greeting-container">
	<h1 class="greeting-header">Hello! I'm Tyler.</h1>

	<p>I'm a software developer from Texas.</p>
</div>

<PostList posts={data.posts} />

<style>
	.greeting-header {
		margin-bottom: -2rem;
		font-size: 4rem;
	}

	.greeting-container {
		margin-bottom: 6rem;
	}
</style>
