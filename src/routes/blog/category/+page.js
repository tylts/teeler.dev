export const load = async ({ fetch, params }) => {
	const response = await fetch(`/api/posts`);
	const allPosts = await response.json();
	const allCategories = allPosts.map((post) => post.meta.categories);

	return { allCategories };
};
