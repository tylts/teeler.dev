import "clsx";
import { h as html } from "./html.js";
const metadata = {
  "title": "Basic Overview of JavaScript Closures",
  "date": "August 18, 2025",
  "tags": ["javascript"],
  "excerpt": "Closures are like backpacks."
};
const { title, date, tags, excerpt } = metadata;
function Closures_overview_md($$renderer) {
  $$renderer.push(`<h2 id="javascript-closures"><a aria-hidden="true" tabindex="-1" href="#javascript-closures"><span class="icon icon-link"></span></a>JavaScript closures</h2> <p>Ever wondered how some functions can remember variables after they should have been garbage collected? Closures provide a way for functions to “remember” variables from its outer scope, even after the function has finished running. Sort of like a backpack that has variables in different pockets.</p> <h2 id="super-simple-example"><a aria-hidden="true" tabindex="-1" href="#super-simple-example"><span class="icon icon-link"></span></a>Super simple example</h2> ${html(`<pre class="shiki aurora-x" style="background-color:#07090F;color:#bbbbbb" tabindex="0"><code><span class="line"><span style="color:#C792EA">function</span><span style="color:#82AAFF"> createMonster</span><span style="color:#89DDFF">(</span><span style="color:#F78C6C">name</span><span style="color:#89DDFF">)</span><span style="color:#89DDFF"> &#123;</span></span>
<span class="line"><span style="color:#546E7A;font-style:italic">	// outer function</span></span>
<span class="line"><span style="color:#C792EA">	function</span><span style="color:#82AAFF"> greet</span><span style="color:#89DDFF">()</span><span style="color:#89DDFF"> &#123;</span></span>
<span class="line"><span style="color:#546E7A;font-style:italic">		// inner function</span></span>
<span class="line"><span style="color:#89DDFF">		return</span><span style="color:#89DDFF"> &#96;</span><span style="color:#C3E88D">You find a monster named </span><span style="color:#89DDFF">$&#123;</span><span style="color:#F07178">name</span><span style="color:#89DDFF">&#125;</span><span style="color:#C3E88D">!</span><span style="color:#89DDFF">&#96;</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#89DDFF">	&#125;</span></span>
<span class="line"><span style="color:#89DDFF">	return</span><span style="color:#F07178"> greet</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#89DDFF">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA">const</span><span style="color:#EEFFFF"> createOogieBoogie</span><span style="color:#C792EA"> =</span><span style="color:#82AAFF"> createMonster</span><span style="color:#BBBBBB">(</span><span style="color:#89DDFF">'</span><span style="color:#C3E88D">Oogie Boogie</span><span style="color:#89DDFF">'</span><span style="color:#BBBBBB">)</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#EEFFFF">console</span><span style="color:#89DDFF">.</span><span style="color:#82AAFF">log</span><span style="color:#BBBBBB">(</span><span style="color:#82AAFF">createOogieBoogie</span><span style="color:#BBBBBB">())</span><span style="color:#89DDFF">;</span><span style="color:#546E7A;font-style:italic"> // outputs "You find a monster named Oogie Boogie!"</span></span></code></pre>`)} <p>If you notice, the variable is only accessible through the outer function, not in the global scope. This helps with data privacy and fewer bugs with state management.</p> <p>Taking it a step deeper, here is another example that uses closures to create a simple counter.</p> ${html(`<pre class="shiki aurora-x" style="background-color:#07090F;color:#bbbbbb" tabindex="0"><code><span class="line"><span style="color:#C792EA">function</span><span style="color:#82AAFF"> createCounter</span><span style="color:#89DDFF">()</span><span style="color:#89DDFF"> &#123;</span></span>
<span class="line"><span style="color:#C792EA">	let</span><span style="color:#F07178"> count</span><span style="color:#C792EA"> =</span><span style="color:#F78C6C"> 0</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#89DDFF">	return</span><span style="color:#89DDFF"> &#123;</span></span>
<span class="line"><span style="color:#82AAFF">		increment</span><span style="color:#89DDFF">:</span><span style="color:#89DDFF"> ()</span><span style="color:#C792EA"> =></span><span style="color:#C792EA"> ++</span><span style="color:#F07178">count</span><span style="color:#89DDFF">,</span></span>
<span class="line"><span style="color:#82AAFF">		getCount</span><span style="color:#89DDFF">:</span><span style="color:#89DDFF"> ()</span><span style="color:#C792EA"> =></span><span style="color:#F07178"> count</span></span>
<span class="line"><span style="color:#89DDFF">	&#125;;</span></span>
<span class="line"><span style="color:#89DDFF">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA">const</span><span style="color:#EEFFFF"> counter</span><span style="color:#C792EA"> =</span><span style="color:#82AAFF"> createCounter</span><span style="color:#BBBBBB">()</span><span style="color:#89DDFF">;</span></span>
<span class="line"><span style="color:#EEFFFF">console</span><span style="color:#89DDFF">.</span><span style="color:#82AAFF">log</span><span style="color:#BBBBBB">(</span><span style="color:#EEFFFF">counter</span><span style="color:#89DDFF">.</span><span style="color:#82AAFF">increment</span><span style="color:#BBBBBB">())</span><span style="color:#89DDFF">;</span><span style="color:#546E7A;font-style:italic"> // 1;</span></span>
<span class="line"><span style="color:#EEFFFF">console</span><span style="color:#89DDFF">.</span><span style="color:#82AAFF">log</span><span style="color:#BBBBBB">(</span><span style="color:#EEFFFF">counter</span><span style="color:#89DDFF">.</span><span style="color:#82AAFF">increment</span><span style="color:#BBBBBB">())</span><span style="color:#89DDFF">;</span><span style="color:#546E7A;font-style:italic"> // 2</span></span>
<span class="line"><span style="color:#EEFFFF">console</span><span style="color:#89DDFF">.</span><span style="color:#82AAFF">log</span><span style="color:#BBBBBB">(</span><span style="color:#EEFFFF">counter</span><span style="color:#89DDFF">.</span><span style="color:#82AAFF">getCount</span><span style="color:#BBBBBB">())</span><span style="color:#89DDFF">;</span><span style="color:#546E7A;font-style:italic"> // 2</span></span></code></pre>`)} <p>Here we return an object, giving the <code>createCounter()</code> function some methods that we can use to manipulate the variables without exposing the rest of the function. Understanding closures is crucial for writing clean, maintainable JavaScript code. They’re used extensively in modern JavaScript patterns, including React hooks and module patterns.</p>`);
}
export {
  Closures_overview_md as default,
  metadata
};
