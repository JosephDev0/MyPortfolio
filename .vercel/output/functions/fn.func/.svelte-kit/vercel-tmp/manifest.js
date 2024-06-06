export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["avatar-1.png","avatar-2.png","avatar-3.png","avatar-4.png","blog-1.jpg","blog-2.jpg","blog-3.jpg","blog-4.jpg","blog-5.jpg","blog-6.jpg","Cath-clg.jpg","Cath-ssc.png","icon-app.svg","icon-design.svg","icon-dev.svg","icon-photo.svg","icon-quote.svg","logo-1-color.png","logo-2-color.png","logo-3-color.png","logo-4-color.png","logo-5-color.png","logo-6-color.png","logo.ico","logo.svg","my-avatar.png","project-1.png","project-2.png","project-3.jpg","project-4.png","project-5.png","project-6.png","project-7.png","project-8.jpg","project-9.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.dd94d484.js","app":"_app/immutable/entry/app.59f8ec69.js","imports":["_app/immutable/entry/start.dd94d484.js","_app/immutable/chunks/index.455f67ec.js","_app/immutable/chunks/singletons.aba919f1.js","_app/immutable/entry/app.59f8ec69.js","_app/immutable/chunks/index.455f67ec.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/FormSubmit",
				pattern: /^\/FormSubmit\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
