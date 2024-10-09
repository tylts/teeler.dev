<script>
	export let tags;
	console.log(tags);
</script>

<ul class="tags">
	{#each tags as tag}
		<li>
			<a id="tag" href="/blog/tag/{tag}">#{tag}</a>
		</li>
	{/each}
</ul>

<style>
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

	li {
		list-style-type: none;
	}
</style>
