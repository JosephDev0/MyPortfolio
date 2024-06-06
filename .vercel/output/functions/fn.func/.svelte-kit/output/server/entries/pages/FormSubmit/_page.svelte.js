import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
const FormSubmit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section style="background: var(--smoky-black)"><h1>Thanks Contacting Surendra Dev !! 
    </h1></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(FormSubmit, "FormSubmit").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
