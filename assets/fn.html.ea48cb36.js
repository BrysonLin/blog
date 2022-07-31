import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.22c9ac66.js";const p={},e=t(`<h2 id="\u4E00\u3001typescript\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001typescript\u51FD\u6570" aria-hidden="true">#</a> \u4E00\u3001TypeScript\u51FD\u6570</h2><ol><li><p>es5\u4E2D\u5B9A\u4E49\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u51FD\u6570\u58F0\u660E\u5F0F</span>
<span class="token keyword">function</span> <span class="token function">sun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u533F\u540D\u51FD\u6570</span>
<span class="token keyword">let</span> <span class="token function-variable function">person</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>TypeScript\u4E2D\u5B9A\u4E49\u65B9\u6CD5</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u51FD\u6570\u58F0\u660E\u5F0F</span>
<span class="token keyword">function</span> <span class="token function">sun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>viod<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u533F\u540D\u51FD\u6570</span>
<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">funciton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">{</span> <span class="token keyword">return</span>  <span class="token string">&#39;&#39;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u4E8C\u3001\u51FD\u6570\u65B9\u6CD5\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u51FD\u6570\u65B9\u6CD5\u4F20\u53C2" aria-hidden="true">#</a> \u4E8C\u3001\u51FD\u6570\u65B9\u6CD5\u4F20\u53C2</h2><ol><li><p>\u51FD\u6570\u58F0\u660E</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getInfo</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">{</span> 
	<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6211\u7684\u540D\u5B57\u53EB</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,\u4ECA\u5E74</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u5C81</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u533F\u540D\u51FD\u6570</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> <span class="token function-variable function">getInfo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> viod<span class="token punctuation">{</span> 
	<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6211\u7684\u540D\u5B57\u53EB</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,\u4ECA\u5E74</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u5C81</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u4E09\u3001\u65B9\u6CD5\u7684\u53EF\u9009\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u65B9\u6CD5\u7684\u53EF\u9009\u53C2\u6570" aria-hidden="true">#</a> \u4E09\u3001\u65B9\u6CD5\u7684\u53EF\u9009\u53C2\u6570</h2><ol><li><p>es5 \u91CC\u9762\u65B9\u6CD5\u7684\u5B9E\u53C2\u548C\u5F62\u53C2\u53EF\u4EE5\u4E0D\u4E00\u6837\uFF0C\u4F46\u662F ts \u4E2D\u5FC5\u987B\u4E00\u6837\uFF0C\u5982\u679C\u4E0D\u4E00\u6837\u5C31\u9700\u8981\u914D\u7F6E\u53EF\u9009\u53C2\u6570</p></li><li><p>\u6CE8\u610F\uFF01\u53EF\u9009\u53C2\u6570\u5FC5\u987B\u914D\u5230\u53C2\u6570\u7684\u6700\u540E\u9762</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> <span class="token function-variable function">getInfo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> viod<span class="token punctuation">{</span> 
	<span class="token keyword">if</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6211\u7684\u540D\u5B57\u53EB</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,\u4ECA\u5E74</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u5C81</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u54C8\u54C8\u54C8&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u56DB\u3001\u65B9\u6CD5\u7684\u9ED8\u8BA4\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u65B9\u6CD5\u7684\u9ED8\u8BA4\u53C2\u6570" aria-hidden="true">#</a> \u56DB\u3001\u65B9\u6CD5\u7684\u9ED8\u8BA4\u53C2\u6570</h2><ol><li><p>es5 \u4E2D\u662F\u4E0D\u80FD\u914D\u7F6E\u9ED8\u8BA4\u4F20\u53C2\u7684\uFF0Ces6 \u548C ts \u53EF\u914D\u7F6E\u9ED8\u8BA4\u53C2\u6570</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token keyword">let</span> <span class="token function-variable function">getInfo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token operator">:</span> viod<span class="token punctuation">{</span> 
	<span class="token keyword">if</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6211\u7684\u540D\u5B57\u53EB</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,\u4ECA\u5E74</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u5C81</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u54C8\u54C8\u54C8&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u4E94\u3001\u51FD\u6570\u5269\u4F59\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u51FD\u6570\u5269\u4F59\u53C2\u6570" aria-hidden="true">#</a> \u4E94\u3001\u51FD\u6570\u5269\u4F59\u53C2\u6570</h2><ol><li><p>\u4E09\u70B9\u8FD0\u7B97\u7B26 \u63A5\u6536\u4F20\u9012\u8FC7\u6765\u7684\u6240\u6709\u53C2\u6570</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token operator">...</span>result<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>result<span class="token punctuation">.</span>lenght<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		sum<span class="token operator">+=</span>result<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> sum
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u516D\u3001\u51FD\u6570\u91CD\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u51FD\u6570\u91CD\u8F7D" aria-hidden="true">#</a> \u516D\u3001\u51FD\u6570\u91CD\u8F7D</h2><ol><li><p>java \u4E2D\u65B9\u6CD5\u7684\u91CD\u8F7D\uFF1A\u91CD\u8F7D\u6307\u7684\u662F\u4E24\u4E2A\u6216\u8005\u4E24\u4E2A\u4EE5\u4E0A\u540C\u540D\u51FD\u6570\uFF0C\u4F46\u5B83\u4EEC\u7684\u53C2\u6570\u4E0D\u4E00\u6837\uFF0C\u8FD9\u65F6\u4F1A\u51FA\u73B0\u51FD\u6570\u91CD\u8F7D\u7684\u60C5\u51B5\u3002</p></li><li><p>typescript \u4E2D\u7684\u91CD\u8F7D\uFF1A\u901A\u8FC7\u4E3A\u540C\u4E00\u4E2A\u51FD\u6570\u63D0\u4F9B\u591A\u4E2A\u51FD\u6570\u7C7B\u578B\u5B9A\u4E49\u6765\u8BD5\u4E0B\u5404\u79CD\u529F\u80FD\u7684\u76EE\u7684\u3002</p></li><li><p>\u4E3A\u4E86\u517C\u5BB9es5\uFF0C\u4EE5\u53CAes6\u4E2D\u91CD\u8F7D\u7684\u5199\u6CD5\u548Cjava\u6709\u533A\u522B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getInfo</span><span class="token punctuation">(</span>names<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">getInfo</span><span class="token punctuation">(</span>age<span class="token operator">:</span><span class="token builtin">number</span> <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">getInfo</span><span class="token punctuation">(</span>str<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">any</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> str <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6211\u53EB\uFF1A</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6211\u7684\u5E74\u9F84\u662F</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,12),o=[e];function i(c,l){return s(),a("div",null,o)}var k=n(p,[["render",i],["__file","fn.html.vue"]]);export{k as default};
