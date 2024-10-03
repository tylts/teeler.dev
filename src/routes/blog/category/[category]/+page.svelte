<script>
	export let data;
</script>

<h1>Category: {data.category}</h1>

{#if data.posts.length}
	<ul>
		{#each data.posts as post}
			<li>
				<h2>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				Published {post.meta.date}
			</li>
		{/each}
	</ul>
{:else}
	<h2>Oopsies! Doesn't look like there's anything here.</h2>
{/if}
