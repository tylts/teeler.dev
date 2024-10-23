<script>
	import Excerpt from '$lib/components/Excerpt.svelte';
	import TagList from '$lib/components/TagList.svelte';
	export let posts;
</script>

<hr />
<ul>
	{#each posts as post, index}
		<li>
			<h2 class="title">
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			<div class="tags-and-date">
				<div class="date">
					{post.meta.date}
				</div>
				<div class="tags">
					<TagList tags={post.meta.tags} />
				</div>
			</div>

			<p class="excerpt"><Excerpt excerpt={post.meta.excerpt} /></p>
		</li>

		{#if index !== posts.length - 1}
			<hr />
		{/if}
	{/each}
</ul>

<style>
	h2 {
		font-size: var(--h2);
	}

	ul {
		padding: 0;
	}

	li {
		list-style-type: none;
	}

	hr {
		max-width: 300px;
		margin: 3rem 0;
		border: 1px solid white;
		opacity: 20%;
	}

	.date {
		align-self: center;
	}

	.tags-and-date {
		gap: 1rem;
		display: flex;
		margin-top: 0.8rem;
		margin-bottom: 3rem;
	}

	.excerpt {
		margin: 40px 0;
	}
</style>
