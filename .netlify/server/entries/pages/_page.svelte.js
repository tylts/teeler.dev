import { y as head, x as bind_props } from "../../chunks/index.js";
import { P as PostList } from "../../chunks/PostList.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Tyler Cave - Software Developer</title>`);
      });
    });
    $$renderer2.push(`<div class="greeting-container svelte-1uha8ag"><h1 class="greeting-header svelte-1uha8ag">Hello! I'm Tyler.</h1> <p>I'm a software developer from Texas.</p></div> `);
    PostList($$renderer2, { posts: data.posts });
    $$renderer2.push(`<!---->`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
