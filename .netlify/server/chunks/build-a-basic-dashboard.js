import "clsx";
import { h as html } from "./html.js";
const metadata = {
  "title": "Build a Basic Dashboard with Me in 10 Minutes - Using CSS Grid",
  "date": "April 25, 2025",
  "tags": ["css", "grid"],
  "excerpt": "Without using even a single float."
};
const { title, date, tags, excerpt } = metadata;
function Build_a_basic_dashboard_md($$renderer) {
  $$renderer.push(`<h2 id="weve-come-a-long-way-since-the-days-we-had-to-float-divs-on-a-page-to-make-a-workable-layout"><a aria-hidden="true" tabindex="-1" href="#weve-come-a-long-way-since-the-days-we-had-to-float-divs-on-a-page-to-make-a-workable-layout"><span class="icon icon-link"></span></a>We’ve come a long way since the days we had to <code>float</code> divs on a page to make a workable layout.</h2> <p>CSS Grid makes it incredibly easy not only to build a layout, but also just to read what’s happening in the code.
In this tutorial we’ll build a super simple dashboard layout that will show you some CSS Grid fundamentals while giving you something practical to build upon.</p> <h2 id="the-layout"><a aria-hidden="true" tabindex="-1" href="#the-layout"><span class="icon icon-link"></span></a>The layout</h2> <p>At the end of this post, we’ll have a responsive dashboard layout with a:</p> <ul><li>Header that spans the full width of the page</li> <li>Sidebar with navigation</li> <li>Main content area</li> <li>Widgets!!!</li></ul> <h2 id="the-bones"><a aria-hidden="true" tabindex="-1" href="#the-bones"><span class="icon icon-link"></span></a>The bones</h2> ${html(`<pre class="shiki aurora-x" style="background-color:#07090F;color:#bbbbbb" tabindex="0"><code><span class="line"><span style="color:#546E7A;font-style:italic">&#x3C;!-- html --></span></span>
<span class="line"><span style="color:#89DDFF">&#x3C;</span><span style="color:#F07178">div</span><span style="color:#FFCB6B;font-style:italic"> class</span><span style="color:#89DDFF">=</span><span style="color:#89DDFF">"</span><span style="color:#C3E88D">dashboard</span><span style="color:#89DDFF">"</span><span style="color:#89DDFF">></span></span>
<span class="line"><span style="color:#89DDFF">	&#x3C;</span><span style="color:#F07178">header</span><span style="color:#FFCB6B;font-style:italic"> class</span><span style="color:#89DDFF">=</span><span style="color:#89DDFF">"</span><span style="color:#C3E88D">header</span><span style="color:#89DDFF">"</span><span style="color:#89DDFF">></span><span style="color:#BBBBBB">Dashboard Header</span><span style="color:#89DDFF">&#x3C;/</span><span style="color:#F07178">header</span><span style="color:#89DDFF">></span></span>
<span class="line"><span style="color:#89DDFF">	&#x3C;</span><span style="color:#F07178">nav</span><span style="color:#FFCB6B;font-style:italic"> class</span><span style="color:#89DDFF">=</span><span style="color:#89DDFF">"</span><span style="color:#C3E88D">sidebar</span><span style="color:#89DDFF">"</span><span style="color:#89DDFF">></span><span style="color:#BBBBBB">Navigation Menu</span><span style="color:#89DDFF">&#x3C;/</span><span style="color:#F07178">nav</span><span style="color:#89DDFF">></span></span>
<span class="line"><span style="color:#89DDFF">	&#x3C;</span><span style="color:#F07178">main</span><span style="color:#FFCB6B;font-style:italic"> class</span><span style="color:#89DDFF">=</span><span style="color:#89DDFF">"</span><span style="color:#C3E88D">main-content</span><span style="color:#89DDFF">"</span><span style="color:#89DDFF">></span><span style="color:#BBBBBB">Main Content Area</span><span style="color:#89DDFF">&#x3C;/</span><span style="color:#F07178">main</span><span style="color:#89DDFF">></span></span>
<span class="line"><span style="color:#89DDFF">	&#x3C;</span><span style="color:#F07178">div</span><span style="color:#FFCB6B;font-style:italic"> class</span><span style="color:#89DDFF">=</span><span style="color:#89DDFF">"</span><span style="color:#C3E88D">widget-section</span><span style="color:#89DDFF">"</span><span style="color:#89DDFF">></span></span>
<span class="line"><span style="color:#89DDFF">		&#x3C;</span><span style="color:#F07178">div</span><span style="color:#FFCB6B;font-style:italic"> class</span><span style="color:#89DDFF">=</span><span style="color:#89DDFF">"</span><span style="color:#C3E88D">widget</span><span style="color:#89DDFF">"</span><span style="color:#89DDFF">></span><span style="color:#BBBBBB">Analytics</span><span style="color:#89DDFF">&#x3C;/</span><span style="color:#F07178">div</span><span style="color:#89DDFF">></span></span>
<span class="line"><span style="color:#89DDFF">		&#x3C;</span><span style="color:#F07178">div</span><span style="color:#FFCB6B;font-style:italic"> class</span><span style="color:#89DDFF">=</span><span style="color:#89DDFF">"</span><span style="color:#C3E88D">widget</span><span style="color:#89DDFF">"</span><span style="color:#89DDFF">></span><span style="color:#BBBBBB">Users</span><span style="color:#89DDFF">&#x3C;/</span><span style="color:#F07178">div</span><span style="color:#89DDFF">></span></span>
<span class="line"><span style="color:#89DDFF">		&#x3C;</span><span style="color:#F07178">div</span><span style="color:#FFCB6B;font-style:italic"> class</span><span style="color:#89DDFF">=</span><span style="color:#89DDFF">"</span><span style="color:#C3E88D">widget</span><span style="color:#89DDFF">"</span><span style="color:#89DDFF">></span><span style="color:#BBBBBB">Revenue</span><span style="color:#89DDFF">&#x3C;/</span><span style="color:#F07178">div</span><span style="color:#89DDFF">></span></span>
<span class="line"><span style="color:#89DDFF">		&#x3C;</span><span style="color:#F07178">div</span><span style="color:#FFCB6B;font-style:italic"> class</span><span style="color:#89DDFF">=</span><span style="color:#89DDFF">"</span><span style="color:#C3E88D">widget</span><span style="color:#89DDFF">"</span><span style="color:#89DDFF">></span><span style="color:#BBBBBB">Traffic</span><span style="color:#89DDFF">&#x3C;/</span><span style="color:#F07178">div</span><span style="color:#89DDFF">></span></span>
<span class="line"><span style="color:#89DDFF">	&#x3C;/</span><span style="color:#F07178">div</span><span style="color:#89DDFF">></span></span>
<span class="line"><span style="color:#89DDFF">&#x3C;/</span><span style="color:#F07178">div</span><span style="color:#89DDFF">></span></span></code></pre>`)} <h2 id="the-magic-"><a aria-hidden="true" tabindex="-1" href="#the-magic-"><span class="icon icon-link"></span></a>The magic ✨</h2> ${html(`<pre class="shiki aurora-x" style="background-color:#07090F;color:#bbbbbb" tabindex="0"><code><span class="line"><span style="color:#546E7A;font-style:italic">/* css */</span></span>
<span class="line"><span style="color:#89DDFF">.</span><span style="color:#FFCB6B">dashboard</span><span style="color:#89DDFF"> &#123;</span></span>
<span class="line"><span style="color:#B2CCD6">	display</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> grid</span><span style="color:#89DDFF">;</span><span style="color:#546E7A;font-style:italic"> /* grid enters the chat */</span></span>
<span class="line"><span style="color:#B2CCD6">	grid-template-areas</span><span style="color:#89DDFF">:</span><span style="color:#546E7A;font-style:italic"> /* see note 1 below */</span></span>
<span class="line"><span style="color:#89DDFF">		'</span><span style="color:#C3E88D">header header</span><span style="color:#89DDFF">'</span></span>
<span class="line"><span style="color:#89DDFF">		'</span><span style="color:#C3E88D">sidebar main</span><span style="color:#89DDFF">'</span></span>
<span class="line"><span style="color:#89DDFF">		'</span><span style="color:#C3E88D">sidebar widgets</span><span style="color:#89DDFF">'</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#B2CCD6">	grid-template-columns</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 200px</span><span style="color:#F78C6C"> 1fr</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#B2CCD6">	grid-template-rows</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> auto</span><span style="color:#F78C6C"> 1fr</span><span style="color:#F78C6C"> auto</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#B2CCD6">	gap</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 20px</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#B2CCD6">	height</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 100vh</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#B2CCD6">	padding</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 20px</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#89DDFF">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF">.</span><span style="color:#FFCB6B">header</span><span style="color:#89DDFF"> &#123;</span></span>
<span class="line"><span style="color:#B2CCD6">	grid-area</span><span style="color:#89DDFF">:</span><span style="color:#BBBBBB"> header</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#B2CCD6">	background</span><span style="color:#89DDFF">:</span><span style="color:#89DDFF"> #f0f0f0;</span></span>
<span class="line"><span style="color:#B2CCD6">	padding</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 20px</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#89DDFF">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF">.</span><span style="color:#FFCB6B">sidebar</span><span style="color:#89DDFF"> &#123;</span></span>
<span class="line"><span style="color:#B2CCD6">	grid-area</span><span style="color:#89DDFF">:</span><span style="color:#BBBBBB"> sidebar</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#B2CCD6">	background</span><span style="color:#89DDFF">:</span><span style="color:#89DDFF"> #e0e0e0;</span></span>
<span class="line"><span style="color:#B2CCD6">	padding</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 20px</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#89DDFF">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF">.</span><span style="color:#FFCB6B">main-content</span><span style="color:#89DDFF"> &#123;</span></span>
<span class="line"><span style="color:#B2CCD6">	grid-area</span><span style="color:#89DDFF">:</span><span style="color:#BBBBBB"> main</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#B2CCD6">	background</span><span style="color:#89DDFF">:</span><span style="color:#89DDFF"> #f8f8f8;</span></span>
<span class="line"><span style="color:#B2CCD6">	padding</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 20px</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#89DDFF">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF">.</span><span style="color:#FFCB6B">widget-section</span><span style="color:#89DDFF"> &#123;</span></span>
<span class="line"><span style="color:#B2CCD6">	grid-area</span><span style="color:#89DDFF">:</span><span style="color:#BBBBBB"> widgets</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#B2CCD6">	display</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> grid</span><span style="color:#89DDFF">;</span><span style="color:#546E7A;font-style:italic"> /* grid-ception */</span></span>
<span class="line"><span style="color:#B2CCD6">	grid-template-columns</span><span style="color:#89DDFF">:</span><span style="color:#82AAFF"> repeat</span><span style="color:#89DDFF">(</span><span style="color:#F78C6C">2</span><span style="color:#89DDFF">,</span><span style="color:#F78C6C"> 1fr</span><span style="color:#89DDFF">);</span></span>
<span class="line"><span style="color:#B2CCD6">	gap</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 20px</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#89DDFF">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF">.</span><span style="color:#FFCB6B">widget</span><span style="color:#89DDFF"> &#123;</span></span>
<span class="line"><span style="color:#B2CCD6">	background</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> white</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#B2CCD6">	padding</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 20px</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#B2CCD6">	border-radius</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 8px</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#B2CCD6">	box-shadow</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 0</span><span style="color:#F78C6C"> 2px</span><span style="color:#F78C6C"> 4px</span><span style="color:#82AAFF"> rgba</span><span style="color:#89DDFF">(</span><span style="color:#F78C6C">0</span><span style="color:#89DDFF">,</span><span style="color:#F78C6C"> 0</span><span style="color:#89DDFF">,</span><span style="color:#F78C6C"> 0</span><span style="color:#89DDFF">,</span><span style="color:#F78C6C"> 0.1</span><span style="color:#89DDFF">);</span></span>
<span class="line"><span style="color:#89DDFF">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;font-style:italic">/* media queries for extra responsiveness */</span></span>
<span class="line"><span style="color:#89DDFF">@media</span><span style="color:#89DDFF"> (</span><span style="color:#B2CCD6">max-width</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 768px</span><span style="color:#89DDFF">)</span><span style="color:#89DDFF"> &#123;</span></span>
<span class="line"><span style="color:#89DDFF">	.</span><span style="color:#FFCB6B">dashboard</span><span style="color:#89DDFF"> &#123;</span></span>
<span class="line"><span style="color:#B2CCD6">		grid-template-areas</span><span style="color:#89DDFF">:</span></span>
<span class="line"><span style="color:#89DDFF">			'</span><span style="color:#C3E88D">header</span><span style="color:#89DDFF">'</span></span>
<span class="line"><span style="color:#89DDFF">			'</span><span style="color:#C3E88D">main</span><span style="color:#89DDFF">'</span></span>
<span class="line"><span style="color:#89DDFF">			'</span><span style="color:#C3E88D">widgets</span><span style="color:#89DDFF">'</span></span>
<span class="line"><span style="color:#89DDFF">			'</span><span style="color:#C3E88D">sidebar</span><span style="color:#89DDFF">'</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#B2CCD6">		grid-template-columns</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 1fr</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#89DDFF">	&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF">	.</span><span style="color:#FFCB6B">widget-section</span><span style="color:#89DDFF"> &#123;</span></span>
<span class="line"><span style="color:#B2CCD6">		grid-template-columns</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 1fr</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#89DDFF">	&#125;</span></span>
<span class="line"><span style="color:#89DDFF">&#125;</span></span></code></pre>`)} <p><strong><em><a href="https://codepen.io/tylts/pen/KKOyezz" rel="nofollow">View on CodePen</a></em></strong></p> <h2 id="okay-but-what-are-we-even-doing"><a aria-hidden="true" tabindex="-1" href="#okay-but-what-are-we-even-doing"><span class="icon icon-link"></span></a>Okay but what are we even doing?</h2> <ol><li><p><strong>Grid Template Areas</strong>: We used named areas so we could visualize the layout with real human words. No robot talk. Also note the grid names in each corresponding child.</p></li> <li><p><strong>Responsive Design</strong>: Let’s talk about what the heck <code>1fr</code> means. <code>fr</code> is a fractional unit. <code>1fr</code> takes up 1 part of the available space. So when we remove the other units and only keep <code>1fr</code> in the columns in the new media query, this collapses all columns into one when the screen size is below 768px width! PRETTY NIFTY!!!</p></li> <li><p><strong>Nested Grids</strong>: Grids in grids in grids. We can next grids within grids for extra grids!</p></li></ol> <p>Try this layout in your next project and experiment with different configurations to better understand how Grid works!</p>`);
}
export {
  Build_a_basic_dashboard_md as default,
  metadata
};
