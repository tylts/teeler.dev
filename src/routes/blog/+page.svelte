<script>
	export let data;
	import Excerpt from '$lib/components/Excerpt.svelte';
</script>

<svelte:head>
	<title>Tyler Cave - Blog</title>
</svelte:head>

<!-- <h1>Blog</h1> -->

<ul>
	{#each data.posts as post, index}
		<li>
			<h2 class="title">
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			<p class="date">
				{post.meta.date}
			</p>
			<p class="excerpt"><Excerpt excerpt={post.meta.excerpt} /></p>
		</li>
		<ul class="tags">
			{#each post.meta.tags as tag}
				<li>
					<a id="tag" href="/blog/tag/{tag}">#{tag}</a>
				</li>
			{/each}
		</ul>
		{#if index !== data.posts.length - 1}
			<hr />
		{/if}
	{/each}
</ul>

<style>
	h2 {
		font-size: var(--h1);
	}

	ul {
		padding: 0;
	}

	li {
		list-style-type: none;
	}

	hr {
		max-width: 250px;
		margin: 12px 0 40px 0;
		border: 1px solid white;
		opacity: 20%;
	}

	.date {
	}

	.excerpt {
		margin: 40px 0;
	}

	.tags {
		display: flex;
		gap: 2px;
	}

	#tag {
		border: 1px white solid;
		color: hsl(240, 100%, 5%);
		border-radius: 24px;
		text-decoration: none;
		padding: 3px 6px;
		background-color: white;
		transition:
			0.3s background ease,
			0.4s color ease;
		&:hover {
			background: hsl(240, 100%, 5%);
			color: white;
		}
	}
</style>
