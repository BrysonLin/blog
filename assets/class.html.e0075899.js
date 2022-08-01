import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.10beb43c.js";const t={},i=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> // \u6784\u9020\u51FD\u6570

  function Person(name,age){

   this.name = name;

    this.age = age;*

   this.sayHei=function(){

    console.log(\`\u6211\u7684\u540D\u5B57\u53EB\${this.name}\uFF0C\u4ECA\u5E74\uFF1A\${this.age}\`);

   }*

  }

 // \u539F\u578B\u4E0A\u589E\u52A0\u65B9\u6CD5

   Person.prototype.sex = function(){

    console.log(&#39;\u6211\u6B63\u5728\u88AB\u5171\u4EAB\uFF01&#39;);

   }

   // \u9759\u6001\u65B9\u6CD5

  Person.printName = function(){*

    console.log(this.name);*

   }

  // let person1 = new Person(&#39;linxing&#39;,18);



  // \u5BF9\u8C61\u5192\u5145\u7EE7\u627F  \u53EF\u4EE5\u7EE7\u627F\u5C5E\u6027\u548C\u65B9\u6CD5\u4F20\u53C2 \u6CA1\u6CD5\u7EE7\u627F\u539F\u578B\u94FE\u548C\u9759\u6001\u65B9\u6CD5

   function Web(){

   Person.call(this\uFF0C\u4F20\u53C2)

   }

   // \u539F\u578B\u94FE\u7EE7\u627F \u53EF\u4EE5\u7EE7\u627F\u5C5E\u6027\u548C\u65B9\u6CD5\u4E5F\u53EF\u4EE5\u7EE7\u627F\u539F\u578B\u94FE\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5  \u6CA1\u6CD5\u4F20\u53C2

   Web.prototype = new Person();*

   let v = new Web();

   v.sayHei();

  // \u539F\u578B\u94FE\u548C\u5BF9\u8C61\u5192\u5145\u51FD\u6570\u7EE7\u627F\u5C5E\u6027\u548C\u65B9\u6CD5

   function Web(name,age){

    Person.call(this,name,age)

  }

  // Webj.prototype = Person.prototype;

  

   // \u7528\u5BF9\u8C61\u5192\u5145\uFF08\u76D7\u7528\u6784\u9020\u51FD\u6570\uFF09\u53BB\u7EE7\u627F\u7236\u7C7B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5 Person.call(thsi, params)

   // \u7528\u539F\u578B\u94FE\u53BB\u7EE7\u627F\u7236\u7C7B\u7684\u539F\u578B\u4E0A\u7684\u65B9\u6CD5  web.prototype = new Person    web.prototype = Person.prototype
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E00\u3001typescript-\u4E2D\u7684\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001typescript-\u4E2D\u7684\u7C7B" aria-hidden="true">#</a> \u4E00\u3001TypeScript \u4E2D\u7684\u7C7B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
	name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>			<span class="token comment">// \u6784\u9020\u51FD\u6570  \u5B9E\u4F8B\u5316\u7C7B\u7684\u65F6\u5019\u89E6\u53D1\u7684\u65B9\u6CD5</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
    <span class="token function">setName</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span>viod <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001typescript-\u4E2D\u7C7B\u7EE7\u627F-extends\u3001super" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001typescript-\u4E2D\u7C7B\u7EE7\u627F-extends\u3001super" aria-hidden="true">#</a> \u4E8C\u3001TypeScript \u4E2D\u7C7B\u7EE7\u627F\uFF1Aextends\u3001super</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
	name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>			<span class="token comment">// \u6784\u9020\u51FD\u6570  \u5B9E\u4F8B\u5316\u7C7B\u7684\u65F6\u5019\u89E6\u53D1\u7684\u65B9\u6CD5</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
    <span class="token function">setName</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span>viod <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
\u5B9A\u4E49 web \u7C7B\u6765\u7EE7\u627F Person \u7C7B
<span class="token keyword">class</span> <span class="token class-name">Web</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>						<span class="token comment">// \u521D\u59CB\u5316\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570				</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> w <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Web</span><span class="token punctuation">(</span><span class="token string">&#39;\u674E\u56DB&#39;</span><span class="token punctuation">)</span>\uFF1B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u3001typescript\u7C7B\u91CC\u9762\u7684\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001typescript\u7C7B\u91CC\u9762\u7684\u4FEE\u9970\u7B26" aria-hidden="true">#</a> \u4E09\u3001TypeScript\u7C7B\u91CC\u9762\u7684\u4FEE\u9970\u7B26</h2><ol><li>TypeScript \u91CC\u9762\u5B9A\u4E49\u4E86\u5C5E\u6027\u7684\u65F6\u5019\u7ED9\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E09\u79CD\u4FEE\u9970\u7B26 <ol><li>public\uFF1A\u516C\u6709 \u5728\u7C7B\u91CC\u9762\u3001\u5B50\u7C7B\u3001\u7C7B\u5916\u90FD\u53EF\u4EE5\u8BBF\u95EE</li><li>protected\uFF1A\u4FDD\u62A4\u7C7B\u578B \u5728\u7C7B\u91CC\u9762\u3001\u5B50\u7C7B\u91CC\u9762\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u5728\u7C7B\u5916\u90E8\u6CA1\u6CD5\u8BBF\u95EE</li><li>private\uFF1A\u79C1\u6709 \u5728\u7C7B\u91CC\u9762\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u5B50\u7C7B\u3001\u7C7B\u5916\u90E8\u90FD\u6CA1\u6CD5\u8BBF\u95EE</li></ol></li><li>\u5C5E\u6027\u4E0D\u52A0\u4FEE\u9970\u7B26\uFF1A\u9ED8\u8BA4\u4EE3\u8868\u5171\u6709\u5C5E\u6027\uFF0Cpublic</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Person{
	public name:string;
	constructor(name: string){			// \u6784\u9020\u51FD\u6570  \u5B9E\u4F8B\u5316\u7C7B\u7684\u65F6\u5019\u89E6\u53D1\u7684\u65B9\u6CD5
		this.name = name;
	}
    getName(): string{
        return this.name
    }
    setName(name:string):viod {
        this.name = name;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E00\u3001typescript\u4E2D\u7C7B\u7684\u9759\u6001\u5C5E\u6027\u3001\u9759\u6001\u65B9\u6CD5\u3001\u62BD\u8C61\u7C7B\u3001\u591A\u6001" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001typescript\u4E2D\u7C7B\u7684\u9759\u6001\u5C5E\u6027\u3001\u9759\u6001\u65B9\u6CD5\u3001\u62BD\u8C61\u7C7B\u3001\u591A\u6001" aria-hidden="true">#</a> \u4E00\u3001TypeScript\u4E2D\u7C7B\u7684\u9759\u6001\u5C5E\u6027\u3001\u9759\u6001\u65B9\u6CD5\u3001\u62BD\u8C61\u7C7B\u3001\u591A\u6001</h2><ol><li><p>es5\u4E2D\u7684\u9759\u6001\u5C5E\u6027\u3001\u9759\u6001\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
Person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;linxing&#39;</span><span class="token punctuation">;</span>		<span class="token comment">// \u9759\u6001\u5C5E\u6027</span>
Person<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">}</span>  <span class="token comment">// \u9759\u6001\u65B9\u6CD5</span>


Jquery
<span class="token function">$</span><span class="token punctuation">(</span><span class="token punctuation">.</span>box<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    <span class="token keyword">return</span> <span class="token function">Base</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token function">Base</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token keyword">this</span><span class="token punctuation">.</span>css <span class="token operator">=</span> <span class="token string">&#39;\u83B7\u53D6DOM\u8282\u70B9&#39;</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>TypeScript\u4E2D\u9759\u6001\u5C5E\u6027\u3001\u9759\u6001\u65B9\u6CD5</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
	<span class="token keyword">static</span> age<span class="token operator">:</span> <span class="token builtin">number</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
	<span class="token punctuation">}</span>
	<span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>		<span class="token comment">// \u5B9E\u4F8B\u65B9\u6CD5</span>
		
	<span class="token punctuation">}</span>
	<span class="token keyword">static</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>		<span class="token comment">// \u5728\u9759\u6001\u65B9\u6CD5\u91CC\u9762\u4E0D\u80FD\u4F7F\u7528this</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u8FD9\u662F\u9759\u6001\u65B9\u6CD5&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u591A\u6001\u65B9\u6CD5</p><ol><li>\u7236\u7C7B\u5B9A\u4E49\u4E00\u4E2A\u65B9\u6CD5\u4E0D\u53BB\u5B9E\u73B0\uFF0C\u8BA9\u7EE7\u627F\u5B83\u7684\u5B50\u7C7B\u53BB\u5B9E\u73B0 \u6BCF\u4E00\u4E2A\u5B50\u7C7B\u6709\u4E0D\u540C\u7684\u8868\u73B0</li><li>\u591A\u6001\u5C5E\u4E8E\u7EE7\u627F</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
	<span class="token punctuation">}</span>
	<span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>							<span class="token comment">// \u5B9A\u4E49\u4E86\u4E00\u4E2A\u65B9\u6CD5\u4E0D\u53BB\u5B9E\u73B0\uFF0C\u8BA9\u5B50\u7C7B\u53BB\u5B9E\u73B0</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u662F\u5403\u7684\u65B9\u6CD5&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>							<span class="token comment">// \u8FD9\u5C31\u662F\u591A\u6001\uFF0C \u7EE7\u627F\u91CD\u5199\u4E86\u7236\u7C7B\u65B9\u6CD5</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u72D7\u5403\u7CAE\u98DF&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5403\u8001\u9F20&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u62BD\u8C61\u65B9\u6CD5</p><ol><li>typeScript \u4E2D\u7684\u62BD\u8C61\u7C7B\uFF1A\u5B83\u662F\u63D0\u4F9B\u5176\u4ED6\u7C7B\u7EE7\u627F\u7684\u57FA\u7C7B\uFF0C\u4E0D\u80FD\u76F4\u63A5\u88AB\u5B9E\u4F8B\u5316\u3002</li><li>\u7528 abstract \u5173\u952E\u5B57\u5B9A\u4E49\u62BD\u8C61\u7C7B\u548C\u62BD\u8C61\u65B9\u6CD5\uFF0C\u62BD\u8C61\u7C7B\u4E2D\u7684\u62BD\u8C61\u65B9\u6CD5\u4E0D\u5305\u542B\u5177\u4F53\u5B9E\u73B0\u5E76\u4E14\u5FC5\u987B\u5728\u6D3E\u751F\u7C7B\u4E2D\u5B9E\u73B0\u3002</li><li>abstract \u65B9\u6CD5\u53EA\u80FD\u653E\u5728\u62BD\u8C61\u7C7B\u91CC\u9762</li><li>\u62BD\u8C61\u7C7B\u548C\u62BD\u8C61\u65B9\u6CD5\u7528\u6765\u5B9A\u4E49\u6807\u51C6\uFF0C\u6807\u51C6\uFF1AAnimal \u8FD9\u4E2A\u7C7B\u8981\u6C42\u5B83\u7684\u5B50\u7C7B\u5FC5\u987B\u5305\u542B eat \u65B9\u6CD5</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>				<span class="token comment">// \u7236\u7C7B\u5B9A\u4E49\uFF0C\u5B50\u7C7B\u5FC5\u987B\u5B9E\u73B0</span>
    <span class="token keyword">public</span> names<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">this</span><span class="token punctuation">.</span>names <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token keyword">abstract</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// let p = new Animal()  \u9519\u8BEF\uFF1A\u65E0\u6CD5\u5B9A\u4E49\u62BD\u8C61\u7C7B</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>names <span class="token operator">+</span> <span class="token string">&#39;\u5403&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,10),p=[i];function c(l,o){return s(),a("div",null,p)}var r=n(t,[["render",c],["__file","class.html.vue"]]);export{r as default};
