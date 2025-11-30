import * as universal from '../entries/pages/blog/tag/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/tag/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/tag/+page.js";
export const imports = ["_app/immutable/nodes/5.BwkmcXS7.js","_app/immutable/chunks/B3s76pJw.js","_app/immutable/chunks/BOdr2omv.js","_app/immutable/chunks/CQqbQCzz.js","_app/immutable/chunks/DmZWdmZT.js","_app/immutable/chunks/DimSswgj.js","_app/immutable/chunks/DR32nTNk.js","_app/immutable/chunks/DQyBQsgk.js"];
export const stylesheets = ["_app/immutable/assets/TagList.CLkzJh2W.css","_app/immutable/assets/5.DdOoe3yL.css"];
export const fonts = [];
