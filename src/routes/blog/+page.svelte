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
		<!-- {#if index === 0}
			<hr />
		{/if} -->
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
				<li class="tag">
					<a href="/blog/tag/{tag}">#{tag}</a>
				</li>
			{/each}
		</ul>
		{#if index !== data.posts.length - 1}
			<hr />
		{/if}
	{/each}
</ul>

<style>
	ul {
		padding: 0;
	}
	li {
		list-style-type: none;
	}

	h2 {
		font-size: 3rem;
	}

	hr {
		max-width: 250px;
		margin: 12px 0 40px 0;
		border: 1px solid white;
		opacity: 20%;
	}

	.title {
		margin-top: 7px;
	}

	.date {
		font-size: 0.8rem;
	}

	.excerpt {
		margin: 40px 0;
	}

	.tags {
		display: flex;
		gap: 2px;
	}

	.tag {
		border: 1px white solid;
		border-radius: 12px;
		padding: 3px 6px;
		background-color: white;
		transition: 0.2s background ease;
		&:hover {
			background: hsl(240, 100%, 5%);
		}
	}

	.tag > a {
		color: hsl(240, 100%, 5%);
		font-size: 0.8rem;
		vertical-align: middle;
		text-decoration: none;
		transition: 0.2s color ease;
		&:hover {
			color: white;
		}
	}
</style>
