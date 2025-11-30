import "clsx";
import { h as html } from "./html.js";
const metadata = {
  "title": "Two Divverent Ways to Center a Div Using CSS",
  "date": "July 9, 2025",
  "tags": ["css", "flexbox", "grid"],
  "excerpt": "margin: 0 auto is so 2009."
};
const { title, date, tags, excerpt } = metadata;
function Center_div_md($$renderer) {
  $$renderer.push(`<h2 id="here-are-two-quick-and-easy-ways-to-center-a-div-without-reaching-for-margin-auto"><a aria-hidden="true" tabindex="-1" href="#here-are-two-quick-and-easy-ways-to-center-a-div-without-reaching-for-margin-auto"><span class="icon icon-link"></span></a>Here are two quick and easy ways to center a div without reaching for margin auto!</h2> <h2 id="flexbox"><a aria-hidden="true" tabindex="-1" href="#flexbox"><span class="icon icon-link"></span></a>Flexbox</h2> <p>Flexbox is a super powerful layout tool that also gives us an easy way to center a div. Chris Coyier’s <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" rel="nofollow">comprehensive guide</a> is where I always go to brush up.</p> ${html(`<pre class="shiki aurora-x" style="background-color:#07090F;color:#bbbbbb" tabindex="0"><code><span class="line"><span style="color:#89DDFF">.</span><span style="color:#FFCB6B">parent</span><span style="color:#89DDFF"> &#123;</span></span>
<span class="line"><span style="color:#B2CCD6">	display</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> flex</span><span style="color:#89DDFF">;</span><span style="color:#546E7A;font-style:italic"> /* sets the parent div as a flex container */</span></span>
<span class="line"><span style="color:#B2CCD6">	justify-content</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> center</span><span style="color:#89DDFF">;</span><span style="color:#546E7A;font-style:italic"> /* centers the child horizontally */</span></span>
<span class="line"><span style="color:#B2CCD6">	align-items</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> center</span><span style="color:#89DDFF">;</span><span style="color:#546E7A;font-style:italic"> /* centers the child vertically */</span></span>
<span class="line"><span style="color:#B2CCD6">	height</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 100vh</span><span style="color:#89DDFF">;</span><span style="color:#546E7A;font-style:italic"> /* 100 viewport height units = full viewport height */</span></span>
<span class="line"><span style="color:#89DDFF">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF">.</span><span style="color:#FFCB6B">child</span><span style="color:#89DDFF"> &#123;</span></span>
<span class="line"><span style="color:#B2CCD6">	width</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 200px</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#B2CCD6">	height</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 200px</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#89DDFF">&#125;</span></span></code></pre>`)} <h2 id="grid"><a aria-hidden="true" tabindex="-1" href="#grid"><span class="icon icon-link"></span></a>Grid</h2> <p>If you’re using a grid layout, you can reach for the <code>place-items</code> property. This example will center both horizontally and vertically, so check <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/place-items" rel="nofollow">MDN web docs</a> for more options!</p> ${html(`<pre class="shiki aurora-x" style="background-color:#07090F;color:#bbbbbb" tabindex="0"><code><span class="line"><span style="color:#89DDFF">.</span><span style="color:#FFCB6B">parent</span><span style="color:#89DDFF"> &#123;</span></span>
<span class="line"><span style="color:#B2CCD6">	display</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> grid</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#B2CCD6">	place-items</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> center</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#B2CCD6">	height</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 100vh</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#89DDFF">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF">.</span><span style="color:#FFCB6B">child</span><span style="color:#89DDFF"> &#123;</span></span>
<span class="line"><span style="color:#B2CCD6">	width</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 22rem</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#B2CCD6">	height</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 22rem</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#89DDFF">&#125;</span></span></code></pre>`)}`);
}
export {
  Center_div_md as default,
  metadata
};
