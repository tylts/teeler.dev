import { x as bind_props, F as ensure_array_like, z as attr } from "./index.js";
import { e as escape_html } from "./context.js";
import { T as TagList } from "./TagList.js";
function Excerpt($$renderer, $$props) {
  let excerpt = $$props["excerpt"];
  $$renderer.push(`<div>${escape_html(excerpt)}</div>`);
  bind_props($$props, { excerpt });
}
function PostList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let posts = $$props["posts"];
    $$renderer2.push(`<ul class="svelte-kjz6sm"><!--[-->`);
    const each_array = ensure_array_like(posts);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let post = each_array[index];
      $$renderer2.push(`<li class="svelte-kjz6sm"><h2 class="title svelte-kjz6sm"><a${attr("href", post.path)}>${escape_html(post.meta.title)}</a></h2> <div class="tags-and-date svelte-kjz6sm"><div class="date svelte-kjz6sm">${escape_html(post.meta.date)}</div> <div class="tags">`);
      TagList($$renderer2, { tags: post.meta.tags });
      $$renderer2.push(`<!----></div></div> <p class="excerpt svelte-kjz6sm">`);
      Excerpt($$renderer2, { excerpt: post.meta.excerpt });
      $$renderer2.push(`<!----></p></li> `);
      if (index !== posts.length - 1) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<hr class="svelte-kjz6sm"/>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></ul>`);
    bind_props($$props, { posts });
  });
}
export {
  PostList as P
};
