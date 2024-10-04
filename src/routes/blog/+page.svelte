<script>
	export let data;
</script>

<svelte:head>
	<title>Tyler Cave - Blog</title>
</svelte:head>

<h1>Blog</h1>

<ul>
	{#each data.posts as post}
		<li>
			<h2 class="title">
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			{post.meta.date}
		</li>
	{/each}
</ul>

<style>
	ul {
		padding: 0;
	}
	li {
		list-style-type: none;
	}
</style>
