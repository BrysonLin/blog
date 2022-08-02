import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.636b4e4e.js";const p={},e=t(`<h2 id="\u4E00\u3001typescript\u4E2D\u7684\u88C5\u9970" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001typescript\u4E2D\u7684\u88C5\u9970" aria-hidden="true">#</a> \u4E00\u3001TypeScript\u4E2D\u7684\u88C5\u9970</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ol><li>\u88C5\u9970\u5668\uFF1A\u88C5\u9970\u5668\u662F\u4E00\u79CD\u7279\u6B8A\u7C7B\u578B1\u7684\u58F0\u660E\uFF0C\u5B83\u80FD\u591F\u88AB\u9644\u52A0\u5230\u7C7B\u58F0\u660E\uFF0C\u65B9\u6CD5\uFF0C\u5C5E\u6027\u6216\u4F20\u53C2\u4E0A\uFF0C\u53EF\u4EE5\u4FEE\u6539\u7C7B\u7684\u884C\u4E3A\u3002</li><li>\u901A\u4FD7\u7684\u8BB2 \u88C5\u9970\u5668\u5C31\u662F\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u6CE8\u5165\u5230\u7C7B\u3001\u65B9\u6CD5\u3001\u5C5E\u6027\u53C2\u6570\u4E0A\u6765\u6269\u5C55\u7C7B\u3001\u5C5E\u6027\u3001\u65B9\u6CD5\u3001\u53C2\u6570\u7684\u529F\u80FD\u3002</li><li>\u5E38\u89C1\u7684\u88C5\u9970\u5668\u6709\uFF1A\u7C7B\u88C5\u9970\u5668\u3001\u5C5E\u6027\u88C5\u9970\u5668\u3001\u65B9\u6CD5\u88C5\u9970\u5668\u3001\u53C2\u6570\u88C5\u9970\u5668</li><li>\u88C5\u9970\u5668\u7684\u5199\u6CD5\uFF1A\u666E\u901A\u88C5\u9970\u5668\uFF08\u65E0\u6CD5\u4F20\u53C2\uFF09\u3001\u88C5\u9970\u5668\u5DE5\u5382\uFF08\u53EF\u4F20\u53C2\uFF09</li><li>\u88C5\u9970\u5668\u662F\u8FC7\u53BB\u51E0\u5E74\u4E2D JS \u6700\u5927\u7684\u6210\u5C31\u4E4B\u4E00\uFF0C\u5DF2\u662F es7 \u7684\u6807\u51C6\u7279\u6027\u4E4B\u4E00</li></ol></div><h2 id="\u4E8C\u3001\u7C7B\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u7C7B\u88C5\u9970\u5668" aria-hidden="true">#</a> \u4E8C\u3001\u7C7B\u88C5\u9970\u5668</h2><h3 id="_1-\u7C7B\u88C5\u9970\u5668-\u7C7B\u88C5\u9970\u5668\u5728\u7C7B\u58F0\u660E\u4E4B\u524D\u88AB\u58F0\u660E-\u7D27\u9760\u7740\u7C7B\u58F0\u660E-\u3002\u7C7B\u88C5\u9970\u5668\u5E94\u7528\u4E8E\u7C7B\u6784\u9020\u51FD\u6570-\u53EF\u4EE5\u7528\u6765\u76D1\u89C6-\u4FEE\u6539\u6216\u66FF\u6362\u7C7B\u5B9A\u4E49\u3002\u4F20\u5165\u4E00\u4E2A\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_1-\u7C7B\u88C5\u9970\u5668-\u7C7B\u88C5\u9970\u5668\u5728\u7C7B\u58F0\u660E\u4E4B\u524D\u88AB\u58F0\u660E-\u7D27\u9760\u7740\u7C7B\u58F0\u660E-\u3002\u7C7B\u88C5\u9970\u5668\u5E94\u7528\u4E8E\u7C7B\u6784\u9020\u51FD\u6570-\u53EF\u4EE5\u7528\u6765\u76D1\u89C6-\u4FEE\u6539\u6216\u66FF\u6362\u7C7B\u5B9A\u4E49\u3002\u4F20\u5165\u4E00\u4E2A\u53C2\u6570" aria-hidden="true">#</a> 1. \u7C7B\u88C5\u9970\u5668\uFF1A\u7C7B\u88C5\u9970\u5668\u5728\u7C7B\u58F0\u660E\u4E4B\u524D\u88AB\u58F0\u660E\uFF08\u7D27\u9760\u7740\u7C7B\u58F0\u660E\uFF09\u3002\u7C7B\u88C5\u9970\u5668\u5E94\u7528\u4E8E\u7C7B\u6784\u9020\u51FD\u6570\uFF0C\u53EF\u4EE5\u7528\u6765\u76D1\u89C6\uFF0C\u4FEE\u6539\u6216\u66FF\u6362\u7C7B\u5B9A\u4E49\u3002\u4F20\u5165\u4E00\u4E2A\u53C2\u6570</h3><h3 id="_2-\u666E\u901A\u88C5\u9970\u5668-\u6CA1\u6709\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_2-\u666E\u901A\u88C5\u9970\u5668-\u6CA1\u6709\u53C2\u6570" aria-hidden="true">#</a> 2. \u666E\u901A\u88C5\u9970\u5668\uFF08\u6CA1\u6709\u53C2\u6570\uFF09</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">logclass</span><span class="token punctuation">(</span>parms<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  parms<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">logclass</span></span>
<span class="token keyword">class</span> <span class="token class-name">Web</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> person<span class="token operator">:</span><span class="token builtin">any</span>  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Web</span><span class="token punctuation">(</span><span class="token string">&#39;linxing&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u88C5\u9970\u5668\u5DE5\u5382-\u5E26\u53C2" tabindex="-1"><a class="header-anchor" href="#_3-\u88C5\u9970\u5668\u5DE5\u5382-\u5E26\u53C2" aria-hidden="true">#</a> 3. \u88C5\u9970\u5668\u5DE5\u5382\uFF08\u5E26\u53C2\uFF09</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u88C5\u9970\u5668</span>
<span class="token keyword">function</span> <span class="token function">logclass</span><span class="token punctuation">(</span>params<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>target<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
q    target<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>apiUrl <span class="token operator">=</span> params<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">logclass</span></span><span class="token punctuation">(</span><span class="token string">&#39;http://www.itying.com/api&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Web</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> person<span class="token operator">:</span><span class="token builtin">any</span>  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Web</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>apiUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u7C7B\u88C5\u9970\u5668\u91CD\u8F7D-\u7C7B\u7684\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4-\u7C7B\u88C5\u9970\u5668\u91CD\u8F7D-\u7C7B\u7684\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> 4. \u7C7B\u88C5\u9970\u5668\u91CD\u8F7D \u7C7B\u7684\u6784\u9020\u51FD\u6570</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u88C5\u9970\u5668</span>
<span class="token keyword">function</span> <span class="token function">logclass</span><span class="token punctuation">(</span>target<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token keyword">extends</span></span> target<span class="token punctuation">{</span>
    apiUlr<span class="token operator">:</span><span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&#39;\u6211\u662F\u4FEE\u6539\u8FC7\u540E\u7684\u6570\u636E&#39;</span><span class="token punctuation">;</span>
    <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>apiUlr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">logclass</span></span>
<span class="token keyword">class</span> <span class="token class-name">Web</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> apiUlr<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>apiUlr <span class="token operator">=</span> <span class="token string">&#39;\u6211\u662F\u6784\u9020\u51FD\u6570\u91CC\u7684apiurl&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> person<span class="token operator">:</span><span class="token builtin">any</span>  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Web</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>apiUlr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u3001\u5C5E\u6027\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5C5E\u6027\u88C5\u9970\u5668" aria-hidden="true">#</a> \u4E09\u3001\u5C5E\u6027\u88C5\u9970\u5668</h2><blockquote><p><strong>\u5185\u5BB9\u6B63\u5728\u521B\u5EFA\u4E2D\u2026\u2026</strong></p></blockquote>`,12),o=[e];function c(i,l){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","decorator.html.vue"]]);export{k as default};