const load = async ({ fetch, params }) => {
  const response = await fetch(`/api/posts`);
  const allPosts = await response.json();
  const allTags = allPosts.map((post) => post.meta.tags);
  return { allTags };
};
export {
  load
};
