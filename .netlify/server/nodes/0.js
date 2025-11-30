import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Dmko4hPF.js","_app/immutable/chunks/B3s76pJw.js","_app/immutable/chunks/BOdr2omv.js","_app/immutable/chunks/CQqbQCzz.js","_app/immutable/chunks/DmZWdmZT.js","_app/immutable/chunks/DimSswgj.js","_app/immutable/chunks/DQyBQsgk.js","_app/immutable/chunks/DR32nTNk.js"];
export const stylesheets = ["_app/immutable/assets/TagList.CLkzJh2W.css","_app/immutable/assets/0.Cc1vFrVp.css"];
export const fonts = [];
