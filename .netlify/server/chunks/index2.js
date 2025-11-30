const fetchMarkdownPosts = async () => {
  const allPostFiles = /* @__PURE__ */ Object.assign({ "/src/routes/blog/build-a-basic-dashboard.md": () => import("./build-a-basic-dashboard.js"), "/src/routes/blog/center-div.md": () => import("./center-div.js"), "/src/routes/blog/closures-overview.md": () => import("./closures-overview.js"), "/src/routes/blog/how-i-built-calculator.md": () => import("./how-i-built-calculator.js"), "/src/routes/blog/test-post.md": () => import("./test-post.js") });
  const iterablePostFiles = Object.entries(allPostFiles);
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(11, -3);
      return {
        meta: metadata,
        path: postPath
      };
    })
  );
  return allPosts;
};
export {
  fetchMarkdownPosts as f
};
