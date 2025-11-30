import { x as bind_props } from "../../../../chunks/index.js";
import { T as TagList } from "../../../../chunks/TagList.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const tags = new Set([].concat(...data.allTags));
    $$renderer2.push(`<h1>All tags:</h1> <div class="tags svelte-1gatkfw">`);
    TagList($$renderer2, { tags });
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
