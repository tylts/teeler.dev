<script>
	export let data;
	const tags = new Set([].concat(...data.allTags));
</script>

{#each tags as tag}
	<ul>
		<li>
			<a href="/blog/tag/{tag}">{tag}</a>
		</li>
	</ul>
{/each}
