<script>
	export let data;
	import PostList from '$lib/components/PostList.svelte';
</script>

<svelte:head>
	<title>Tyler Cave - Blog</title>
</svelte:head>

<PostList posts={data.posts} />
