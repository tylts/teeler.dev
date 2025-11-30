import "clsx";
import { h as html } from "./html.js";
const metadata = {
  "title": "Test Post",
  "date": "January 10, 2025",
  "tags": ["test"],
  "excerpt": "Do not delete!"
};
const { title, date, tags, excerpt } = metadata;
function Test_post_md($$renderer) {
  $$renderer.push(`<h2 id="h2-this-is-a-heading"><a aria-hidden="true" tabindex="-1" href="#h2-this-is-a-heading"><span class="icon icon-link"></span></a>H2 this is a heading</h2> <p>Nulla facilisi. In auctor, purus id fringilla varius, eros arcu fringilla tellus, et fermentum turpis elit dictum magna. Nam maximus, metus quis pharetra sollicitudin, quam nisl convallis orci, nec tempus lorem lorem sed tellus. Integer porta est eget blandit dapibus. Donec tincidunt metus ut ligula luctus, sit amet maximus est hendrerit.</p> <p>Nunc ultrices interdum nisl, vel venenatis dui lacinia non. Nam vestibulum, urna nec tempor viverra, lectus neque consequat nisi, quis elementum magna eros eget arcu. Cras pharetra fermentum malesuada. Fusce congue dolor lorem, nec eleifend lacus cursus euismod. Donec dignissim augue metus, sed tempor metus hendrerit ac. <strong>Ut pulvinar odio id libero placerat,</strong> sit amet maximus velit aliquam. Vivamus iaculis lorem at erat sagittis bibendum. Vestibulum elementum orci quam, a eleifend ipsum mattis ut. Aenean diam augue, facilisis ut nunc sed, congue consequat tortor.</p> <h3 id="h3-this-is-a-heading"><a aria-hidden="true" tabindex="-1" href="#h3-this-is-a-heading"><span class="icon icon-link"></span></a>H3 this is a heading</h3> <p>Maecenas luctus eget felis vel tristique. In in nisl nec enim tempus facilisis pretium eget dui. Phasellus sollicitudin viverra lacus sit amet semper. Curabitur maximus facilisis pellentesque. Aliquam hendrerit at lacus a ullamcorper.</p> ${html(`<pre class="shiki aurora-x" style="background-color:#07090F;color:#bbbbbb" tabindex="0"><code><span class="line"><span style="color:#89DDFF">&#x3C;</span><span style="color:#F07178">p</span><span style="color:#89DDFF">></span><span style="color:#BBBBBB">I have a code here</span><span style="color:#89DDFF">&#x3C;/</span><span style="color:#F07178">p</span><span style="color:#89DDFF">></span></span>
<span class="line"><span style="color:#89DDFF">&#x3C;</span><span style="color:#F07178">p</span><span style="color:#89DDFF">></span><span style="color:#BBBBBB">This is a really really really really really really really long one</span><span style="color:#89DDFF">&#x3C;/</span><span style="color:#F07178">p</span><span style="color:#89DDFF">></span></span></code></pre>`)} <p>Vestibulum commodo <em>quam vitae magna finibus</em> ullamcorper. Mauris ac dui mattis, luctus ex a, pellentesque dolor. Nulla porttitor libero ut sapien vulputate gravida.</p> ${html(`<pre class="shiki aurora-x" style="background-color:#07090F;color:#bbbbbb" tabindex="0"><code><span class="line"><span style="color:#C792EA">let</span><span style="color:#EEFFFF"> another</span><span style="color:#C792EA"> =</span><span style="color:#89DDFF"> '</span><span style="color:#C3E88D">code</span><span style="color:#89DDFF">'</span><span style="color:#89DDFF">;</span></span></code></pre>`)}`);
}
export {
  Test_post_md as default,
  metadata
};
