import * as universal from '../entries/pages/blog/_slug_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/4.CJhNqMzz.js","_app/immutable/chunks/N3MShNH6.js","_app/immutable/chunks/BOdr2omv.js","_app/immutable/chunks/DT2-GrIc.js","_app/immutable/chunks/B3s76pJw.js","_app/immutable/chunks/CQqbQCzz.js","_app/immutable/chunks/DQyBQsgk.js","_app/immutable/chunks/C4gnKf21.js","_app/immutable/chunks/DR32nTNk.js","_app/immutable/chunks/DimSswgj.js","_app/immutable/chunks/DmZWdmZT.js"];
export const stylesheets = ["_app/immutable/assets/TagList.CLkzJh2W.css","_app/immutable/assets/4.CQnyWMtR.css","_app/immutable/assets/how-i-built-calculator.CdCcf59w.css"];
export const fonts = [];
