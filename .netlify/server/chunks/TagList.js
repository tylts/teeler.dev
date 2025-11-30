import { F as ensure_array_like, z as attr, x as bind_props, G as stringify } from "./index.js";
import { e as escape_html } from "./context.js";
function TagList($$renderer, $$props) {
  let tags = $$props["tags"];
  console.log(tags);
  $$renderer.push(`<ul class="tags svelte-itnj68"><!--[-->`);
  const each_array = ensure_array_like(tags);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tag = each_array[$$index];
    $$renderer.push(`<li class="svelte-itnj68"><a id="tag"${attr("href", `/blog/tag/${stringify(tag)}`)} class="svelte-itnj68">#${escape_html(tag)}</a></li>`);
  }
  $$renderer.push(`<!--]--></ul>`);
  bind_props($$props, { tags });
}
export {
  TagList as T
};
