<script>
	export let data;
</script>

<article>
	<h1 class="title">{data.title}</h1>
	<p>{data.date}</p>
	<svelte:component this={data.content} />
</article>

<svelte:head>
	<title>My blog - {data.title}</title>
	<meta property="og:title" content={data.title} />
</svelte:head>

{#if data.categories.length}
	<aside>
		<h2>Posted in:</h2>
		<ul>
			{#each data.categories as category}
				<li>
					<a href="/blog/category/{category}">{category}</a>
				</li>
			{/each}
		</ul>
	</aside>
{/if}
