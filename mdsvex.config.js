import { defineMDSveXConfig as defineConfig, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const theme = 'aurora-x';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript', 'html', 'css']
});

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(
				highlighter.codeToHtml(code, {
					lang,
					theme
				})
			);
			return `{@html \`${html}\` }`;
		}
	},
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: []
});

export default config;
