

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.25ce6b56.js","_app/immutable/chunks/index.455f67ec.js"];
export const stylesheets = ["_app/immutable/assets/0.db3da031.css"];
export const fonts = [];
