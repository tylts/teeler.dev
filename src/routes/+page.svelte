<script>
	export let data;
	import PostList from '$lib/components/PostList.svelte';
</script>

<svelte:head>
	<title>Tyler Cave - Software Developer</title>
</svelte:head>

<h1 class="greeting">Hello! I'm Tyler.</h1>

<div class="content">
	<p>I'm a software developer from Texas.</p>
</div>

<PostList posts={data.posts} />

<style>
	.greeting {
		margin-bottom: -2rem;
		font-size: 4rem;
	}
	.content {
		margin-bottom: 6rem;
	}
</style>
