export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["TylerCaveResume.pdf","favicon.png","fonts/Digital-7/digital-7.ttf","fonts/Metropolis/Metropolis-Black.ttf","fonts/Metropolis/Metropolis-BlackItalic.ttf","fonts/Roboto/Roboto-Regular.ttf","fonts/Rubik/Rubik-Italic-VariableFont_wght.ttf","fonts/Rubik/Rubik-VariableFont_wght.ttf"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {start:"_app/immutable/entry/start.COfoorde.js",app:"_app/immutable/entry/app.BJtUYQrk.js",imports:["_app/immutable/entry/start.COfoorde.js","_app/immutable/chunks/YUFHhTWv.js","_app/immutable/chunks/BOdr2omv.js","_app/immutable/chunks/BJk54eQ3.js","_app/immutable/entry/app.BJtUYQrk.js","_app/immutable/chunks/N3MShNH6.js","_app/immutable/chunks/BOdr2omv.js","_app/immutable/chunks/DT2-GrIc.js","_app/immutable/chunks/DQyBQsgk.js","_app/immutable/chunks/B3s76pJw.js","_app/immutable/chunks/BJk54eQ3.js","_app/immutable/chunks/DimSswgj.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/api/posts",
				pattern: /^\/api\/posts\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts/_server.js'))
			}
		],
		prerendered_routes: new Set(["/","/api/posts","/blog","/blog/tag","/rss","/who","/blog/tag/projects","/blog/tag/javascript","/blog/tag/css","/blog/tag/flexbox","/blog/tag/grid","/blog/tag/test","/blog/how-i-built-calculator","/blog/closures-overview","/blog/center-div","/blog/build-a-basic-dashboard","/blog/test-post"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
