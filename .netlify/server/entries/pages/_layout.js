const prerender = true;
const load = async ({ fetch }) => {
  const response = await fetch(`/api/posts`);
  const posts = await response.json();
  const allTags = posts.map((post) => post.meta.tags);
  return {
    posts,
    allTags
  };
};
export {
  load,
  prerender
};
