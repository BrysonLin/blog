import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.22c9ac66.js";const p={},e=t(`<h2 id="\u4E00\u3001typescrip\u4E2D\u7684\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001typescrip\u4E2D\u7684\u63A5\u53E3" aria-hidden="true">#</a> \u4E00\u3001TypeScrip\u4E2D\u7684\u63A5\u53E3</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li><ol><li>\u63A5\u53E3\u7684\u4F5C\u7528\uFF1A<code>\u5728\u9762\u5411\u5BF9\u8C61\u7684\u7F16\u7A0B\u4E2D\uFF0C\u63A5\u53E3\u65F6\u4E00\u79CD\u89C4\u8303\u7684\u5B9A\u4E49\uFF0C\u5B83\u5B9A\u4E49\u4E86\u884C\u4E3A\u548C\u52A8\u4F5C\u7684\u89C4\u8303\uFF0C\u5728\u7A0B\u5E8F\u8BBE\u8BA1\u91CC\u9762\uFF0C\u63A5\u53E3\u8D77\u5230\u4E00\u79CD\u9650\u5236\u548C\u89C4\u8303\u7684\u4F5C\u7528\u3002</code>\u63A5\u53E3\u5B9A\u4E49\u4E86\u67D0\u4E00\u6279\u7C7B\u6240\u9700\u8981\u9075\u5B88\u7684\u89C4\u8303\uFF0C\u63A5\u53E3\u4E0D\u5173\u5FC3\u8FD9\u4E9B\u7C7B\u7684\u5185\u90E8\u72B6\u6001\u6570\u636E\uFF0C\u4E5F\u4E0D\u5173\u5FC3\u8FD9\u4E9B\u7C7B\u91CC\u65B9\u6CD5\u7684\u5B9E\u73B0\u7EC6\u8282\uFF0C\u5B83\u53EA\u89C4\u5B9A\u8FD9\u6279\u7C7B\u91CC\u5FC5\u987B\u63D0\u4F9B\u67D0\u4E9B\u65B9\u6CD5\uFF0C\u63D0\u4F9B\u8FD9\u4E9B\u65B9\u6CD5\u7684\u7C7B\u5C31\u53EF\u4EE5\u6EE1\u8DB3\u5B9E\u9645\u9700\u8981\u3002typescript \u4E2D\u7684\u63A5\u53E3\u7C7B\u4F3C\u4E8E java \uFF0C\u540C\u65F6\u8FD8\u589E\u52A0\u4E86\u66F4\u7075\u6D3B\u7684\u63A5\u53E3\u7C7B\u578B\uFF0C\u5305\u62EC <strong>\u5C5E\u6027\u3001\u51FD\u6570\u3001\u53EF\u7D22\u5F15\u3001\u548C\u7C7B</strong> \u7B49\u3002</li></ol></li><li><ol start="2"><li>\u5B9A\u4E49\u884C\u4E3A\u548C\u52A8\u4F5C\u7684\u89C4\u8303\u3002\u5BF9\u6279\u91CF\u65B9\u6CD5\u8FDB\u884C\u7EA6\u675F interface</li></ol></li></ul></div><h2 id="\u4E8C\u3001\u5C5E\u6027\u7C7B\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5C5E\u6027\u7C7B\u63A5\u53E3" aria-hidden="true">#</a> \u4E8C\u3001\u5C5E\u6027\u7C7B\u63A5\u53E3</h2><h3 id="_1-\u5C31\u662F\u4F20\u5165\u5BF9\u8C61\u7684\u7EA6\u675F-\u5C5E\u6027\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_1-\u5C31\u662F\u4F20\u5165\u5BF9\u8C61\u7684\u7EA6\u675F-\u5C5E\u6027\u63A5\u53E3" aria-hidden="true">#</a> 1. \u5C31\u662F\u4F20\u5165\u5BF9\u8C61\u7684\u7EA6\u675F \u5C5E\u6027\u63A5\u53E3</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FullName</span><span class="token punctuation">{</span>
	firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>		<span class="token comment">// \u6CE8\u610F\uFF0C\u5206\u53F7\u7ED3\u675F</span>
	secondName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">printName</span><span class="token punctuation">(</span>name<span class="token operator">:</span>FullName<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">// \u5FC5\u987B\u4F20\u5165firstName  secondName</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>firstName <span class="token operator">+</span> name<span class="token punctuation">.</span>secondName<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u53EF\u9009\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_2-\u53EF\u9009\u63A5\u53E3" aria-hidden="true">#</a> 2. \u53EF\u9009\u63A5\u53E3</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
	secondName<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span>name<span class="token operator">:</span>FullName<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u53C2\u6570\u7684\u987A\u5E8F\u53EF\u4EE5\u4E0D\u4E00\u6837</span>
<span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	firstName<span class="token operator">:</span><span class="token string">&#39;linxing&#39;</span><span class="token punctuation">;</span>
	secondName<span class="token operator">:</span><span class="token string">&#39;liner&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-\u793A\u4F8B" aria-hidden="true">#</a> 3. \u793A\u4F8B</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Config</span><span class="token punctuation">{</span>
	type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
	url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
	data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
	dataType<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span> config<span class="token operator">:</span> Config <span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span> config<span class="token punctuation">.</span>get<span class="token punctuation">,</span> config<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>confiig<span class="token punctuation">.</span>dataType <span class="token operator">==</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">perse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>reponseText<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span><span class="token string">&#39;name:zhang&#39;</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">&#39;http://www.baidu.com&#39;</span><span class="token punctuation">,</span>
    dataType<span class="token operator">:</span><span class="token string">&#39;json&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u3001\u51FD\u6570\u7C7B\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u51FD\u6570\u7C7B\u63A5\u53E3" aria-hidden="true">#</a> \u4E09\u3001\u51FD\u6570\u7C7B\u63A5\u53E3</h2><h3 id="_1-\u51FD\u6570\u7C7B\u578B\u63A5\u53E3-\u5BF9\u65B9\u6CD5\u4F20\u5165\u7684\u53C2\u6570-\u4EE5\u53CA\u8FD4\u56DE\u503C\u8FDB\u884C\u7EA6\u675F-\u6279\u91CF\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#_1-\u51FD\u6570\u7C7B\u578B\u63A5\u53E3-\u5BF9\u65B9\u6CD5\u4F20\u5165\u7684\u53C2\u6570-\u4EE5\u53CA\u8FD4\u56DE\u503C\u8FDB\u884C\u7EA6\u675F-\u6279\u91CF\u7EA6\u675F" aria-hidden="true">#</a> 1. \u51FD\u6570\u7C7B\u578B\u63A5\u53E3\uFF1A\u5BF9\u65B9\u6CD5\u4F20\u5165\u7684\u53C2\u6570 \u4EE5\u53CA\u8FD4\u56DE\u503C\u8FDB\u884C\u7EA6\u675F \u6279\u91CF\u7EA6\u675F</h3><h3 id="_2-\u52A0\u5BC6\u7684\u51FD\u6570\u7C7B\u578B\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_2-\u52A0\u5BC6\u7684\u51FD\u6570\u7C7B\u578B\u63A5\u53E3" aria-hidden="true">#</a> 2. \u52A0\u5BC6\u7684\u51FD\u6570\u7C7B\u578B\u63A5\u53E3</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">encrypt</span><span class="token punctuation">{</span>
	<span class="token punctuation">(</span>key<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>value<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> md5<span class="token operator">:</span><span class="token function-variable function">encrypt</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>key<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>value<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">{</span>
	<span class="token comment">// \u6A21\u62DF\u64CD\u4F5C</span>
	<span class="token keyword">return</span> key <span class="token operator">+</span> name
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u56DB\u3001\u53EF\u7D22\u5F15\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u53EF\u7D22\u5F15\u63A5\u53E3" aria-hidden="true">#</a> \u56DB\u3001\u53EF\u7D22\u5F15\u63A5\u53E3</h2><h3 id="_1-\u53EF\u7D22\u5F15\u63A5\u53E3-\u5BF9\u6570\u7EC4\u3001\u5BF9\u8C61\u7684\u7EA6\u675F-\u4E0D\u5E38\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u53EF\u7D22\u5F15\u63A5\u53E3-\u5BF9\u6570\u7EC4\u3001\u5BF9\u8C61\u7684\u7EA6\u675F-\u4E0D\u5E38\u7528" aria-hidden="true">#</a> 1. \u53EF\u7D22\u5F15\u63A5\u53E3\uFF1A\u5BF9\u6570\u7EC4\u3001\u5BF9\u8C61\u7684\u7EA6\u675F\uFF08\u4E0D\u5E38\u7528\uFF09</h3><h3 id="_2-\u6570\u7EC4\u7684\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#_2-\u6570\u7EC4\u7684\u7EA6\u675F" aria-hidden="true">#</a> 2. \u6570\u7EC4\u7684\u7EA6\u675F</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">UserArr</span><span class="token punctuation">{</span>
	<span class="token punctuation">[</span>index<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span>UserArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;lixing&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u5BF9\u8C61\u7684\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#_3-\u5BF9\u8C61\u7684\u7EA6\u675F" aria-hidden="true">#</a> 3. \u5BF9\u8C61\u7684\u7EA6\u675F</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">UserArr</span><span class="token punctuation">{</span>
	<span class="token punctuation">[</span>index<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">any</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span>UserArr <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span>\uFF0C
	age<span class="token operator">:</span> <span class="token number">23</span>	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E94\u3001\u7C7B\u7C7B\u578B\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u7C7B\u7C7B\u578B\u63A5\u53E3" aria-hidden="true">#</a> \u4E94\u3001\u7C7B\u7C7B\u578B\u63A5\u53E3</h2><h3 id="_1-\u7C7B\u7C7B\u578B\u63A5\u53E3-\u5BF9\u7C7B\u7684\u7EA6\u675F-\u548C-\u62BD\u8C61\u7C7B\u6BD4\u8F83\u76F8\u4F3C" tabindex="-1"><a class="header-anchor" href="#_1-\u7C7B\u7C7B\u578B\u63A5\u53E3-\u5BF9\u7C7B\u7684\u7EA6\u675F-\u548C-\u62BD\u8C61\u7C7B\u6BD4\u8F83\u76F8\u4F3C" aria-hidden="true">#</a> 1. \u7C7B\u7C7B\u578B\u63A5\u53E3\uFF1A\u5BF9\u7C7B\u7684\u7EA6\u675F \u548C \u62BD\u8C61\u7C7B\u6BD4\u8F83\u76F8\u4F3C</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">eat</span><span class="token punctuation">(</span>str<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">implements</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u9ED1\u5403\u7CAE\u98DF\uFF01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u9ED1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u516D\u3001\u63A5\u53E3\u6269\u5C55-\u63A5\u53E3\u53EF\u7EE7\u627F\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u63A5\u53E3\u6269\u5C55-\u63A5\u53E3\u53EF\u7EE7\u627F\u63A5\u53E3" aria-hidden="true">#</a> \u516D\u3001\u63A5\u53E3\u6269\u5C55 \u63A5\u53E3\u53EF\u7EE7\u627F\u63A5\u53E3</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  <span class="token function">eat</span><span class="token punctuation">(</span>foot<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Web</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">Web</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
  <span class="token function">eat</span><span class="token punctuation">(</span>foot<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u5403</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>foot<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
  <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u6572\u4EE3\u7801</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u6797&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&#39;\u7CAE\u98DF&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[e];function c(i,l){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","interface.html.vue"]]);export{k as default};
