import { x as bind_props } from "../../../../../chunks/index.js";
import { P as PostList } from "../../../../../chunks/PostList.js";
import { e as escape_html } from "../../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    $$renderer2.push(`<h1 class="title svelte-cfonpj">#${escape_html(data.tag)}</h1> `);
    PostList($$renderer2, { posts: data.posts });
    $$renderer2.push(`<!---->`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
