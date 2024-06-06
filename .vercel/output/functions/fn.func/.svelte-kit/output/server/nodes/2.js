

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.89ad3086.js","_app/immutable/chunks/index.455f67ec.js"];
export const stylesheets = [];
export const fonts = [];
