

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3750715b.js","_app/immutable/chunks/index.455f67ec.js","_app/immutable/chunks/singletons.aba919f1.js"];
export const stylesheets = [];
export const fonts = [];
