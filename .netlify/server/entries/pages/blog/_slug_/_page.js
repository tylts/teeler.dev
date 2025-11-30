const __variableDynamicImportRuntimeHelper = (glob$1, path$13, segs) => {
  const v = glob$1[path$13];
  if (v) return typeof v === "function" ? v() : Promise.resolve(v);
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path$13 + (path$13.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : ""))));
  });
};
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../build-a-basic-dashboard.md": () => import("../../../../chunks/build-a-basic-dashboard.js"), "../center-div.md": () => import("../../../../chunks/center-div.js"), "../closures-overview.md": () => import("../../../../chunks/closures-overview.js"), "../how-i-built-calculator.md": () => import("../../../../chunks/how-i-built-calculator.js"), "../test-post.md": () => import("../../../../chunks/test-post.js") }), `../${params.slug}.md`, 2);
  const { title, date, tags, excerpt } = post.metadata;
  const content = post.default;
  return {
    content,
    title,
    date,
    tags,
    excerpt
  };
}
export {
  load
};
