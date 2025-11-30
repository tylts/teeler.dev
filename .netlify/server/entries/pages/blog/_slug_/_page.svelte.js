import { y as head, x as bind_props, z as attr } from "../../../../chunks/index.js";
import { T as TagList } from "../../../../chunks/TagList.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    head("1teoznn", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>My blog - ${escape_html(data.title)}</title>`);
      });
      $$renderer3.push(`<meta property="og:title"${attr("content", data.title)}/>`);
    });
    $$renderer2.push(`<article><h1 class="title svelte-1teoznn">${escape_html(data.title)}</h1> <div class="tags-and-date svelte-1teoznn"><div class="date svelte-1teoznn">${escape_html(data.date)}</div> `);
    if (data.tags.length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="tags">`);
      TagList($$renderer2, { tags: data.tags });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <!---->`);
    data.content?.($$renderer2, {});
    $$renderer2.push(`<!----></article>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
