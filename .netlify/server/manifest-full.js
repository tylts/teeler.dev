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
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/posts",
				pattern: /^\/api\/posts\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts/_server.js'))
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/tag",
				pattern: /^\/blog\/tag\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blog/tag/[tag]",
				pattern: /^\/blog\/tag\/([^/]+?)\/?$/,
				params: [{"name":"tag","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/rss",
				pattern: /^\/rss\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/rss/_server.js'))
			},
			{
				id: "/who",
				pattern: /^\/who\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
