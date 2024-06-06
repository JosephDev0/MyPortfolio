

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/FormSubmit/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.1c810daf.js","_app/immutable/chunks/index.455f67ec.js"];
export const stylesheets = [];
export const fonts = [];
