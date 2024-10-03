<script>
	export let data;
	const categories = new Set([].concat(...data.allCategories));
</script>

{#each categories as category}
	<ul>
		<li>
			<a href="/blog/category/{category}">{category}</a>
		</li>
	</ul>
{/each}
