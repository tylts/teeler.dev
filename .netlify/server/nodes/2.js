import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.Df1h9Rx5.js","_app/immutable/chunks/B3s76pJw.js","_app/immutable/chunks/BOdr2omv.js","_app/immutable/chunks/CQqbQCzz.js","_app/immutable/chunks/C4gnKf21.js","_app/immutable/chunks/DmZWdmZT.js","_app/immutable/chunks/DimSswgj.js","_app/immutable/chunks/k3DMIloa.js","_app/immutable/chunks/DR32nTNk.js","_app/immutable/chunks/DQyBQsgk.js","_app/immutable/chunks/DT2-GrIc.js"];
export const stylesheets = ["_app/immutable/assets/TagList.CLkzJh2W.css","_app/immutable/assets/PostList.CTOKZGvD.css","_app/immutable/assets/2.D8ZIDAv3.css"];
export const fonts = [];
