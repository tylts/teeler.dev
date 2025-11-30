import { w as slot, x as bind_props } from "../../chunks/index.js";
import "clsx";
import { e as escape_html } from "../../chunks/context.js";
import { T as TagList } from "../../chunks/TagList.js";
function Header($$renderer) {
  $$renderer.push(`<header><nav><ul class="svelte-1elxaub"><li><a href="/" class="svelte-1elxaub">Home</a></li> <li><a href="/who" class="svelte-1elxaub">Who Am I?</a></li></ul></nav></header>`);
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    $$renderer2.push(`<footer class="footer">© ${escape_html(year)} Tyler Cave</footer>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const tags = new Set([].concat(...data.allTags));
    $$renderer2.push(`<div class="layout">`);
    Header($$renderer2);
    $$renderer2.push(`<!----> <aside class="all-tags-container"><div class="all-tags"><h2>All tags:</h2> `);
    TagList($$renderer2, { tags });
    $$renderer2.push(`<!----></div></aside> <main><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></main> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { data });
  });
}
export {
  _layout as default
};
