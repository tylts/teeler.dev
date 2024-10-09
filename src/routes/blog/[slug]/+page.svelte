<script>
	import TagList from '$lib/components/TagList.svelte';
	export let data;
</script>

<article>
	<h1 class="title">{data.title}</h1>
	<div class="tags-and-date">
		<div class="date">{data.date}</div>
		{#if data.tags.length}
			<div class="tags">
				<TagList tags={data.tags} />
			</div>
		{/if}
	</div>
	<svelte:component this={data.content} />
</article>

<svelte:head>
	<title>My blog - {data.title}</title>
	<meta property="og:title" content={data.title} />
</svelte:head>

<style>
	h1 {
		font-size: var(--h1);
	}

	.date {
		align-self: center;
	}

	.tags-and-date {
		gap: 1rem;
		display: flex;
		margin-top: 0.8rem;
		margin-bottom: 5rem;
	}
</style>
