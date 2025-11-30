import { y as head, x as bind_props } from "../../../chunks/index.js";
import { P as PostList } from "../../../chunks/PostList.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    head("u4k2t", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Tyler Cave - Blog</title>`);
      });
    });
    PostList($$renderer2, { posts: data.posts });
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
