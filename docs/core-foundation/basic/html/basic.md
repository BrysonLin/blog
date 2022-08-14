---
title: HTML/HTML5基础介绍
icon: icon-html5
---

::: info TIP
 Web前端开发零基础快速入门，HTML/HTML5标签及属性的基础语法
:::

<!-- more -->

## 一、基础入门

::: tip TIP
 - 从零开始创建一个网页（2 种方法）
 - 生成 HTML5 骨架
:::

### 1、创建第一个网页

::: info 
 **方法一：**
 
 - 创建一个空文件夹
 - 在文件夹中，右键新建文本文件
 - 然后将文件后缀名`.txt`{.code}修改为` .html`{.code} ，再使用`Vscode` 编辑器打开
 - 注意：设置操作系统 "文件扩展名" 为可见
 
 **方法二：**
 
 - 创建一个空文件夹，直接使用 Vscode 打开文件夹
 - 使用快捷键 Ctrl + N 新建文件 ，保存文件格式为 .html后缀名即可
 - 或者点击新建文件按钮 或 在 Vscode 资源管理器中右键新建文件
:::

::: warning  
 我们所看到的网页有各种效果（包括图片、视频、文字 .....），但 `HTML 文件本身是纯文本`{.code}
:::

### 2、生成 HTML5 骨架（[Vscode](http://vscode.bianjiqi.net/)）

::: info
 **方法一：**
 
 - 在 .html 文件中输入`!`{.code}英文模式下，按 tab键，即可自动生成 HTML5 的骨架
 - 注：如果没有生成，看网页的格式是否正确或保存
 
 **方法二：**
 
 - 在 .html 文件中输入`html:5`{.code}，按 enter键，同样可以生成 HTML5 的骨架
:::

```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    
  </body>
  </html>
```


### 3、预览网页的方式

::: info

 **方法一：**
 
 - 直接文件夹中双击网页图标，即可查看
 - 适合开发者 Chrome 浏览器，记得将 Chrome 浏览器设置为默认浏览器
 - 修改网页内容后，在浏览器中手动刷新后，即可更新内容
 
 **方法二：**
 
 - 在 Vscode 中安装 Live Server插件（实时热更新）修改内容后，保存网页将自动刷新
 - 安装完成后，在当前 HTML 文件中，按快捷键 Ctrl+Shift+P 选择 Open Witch Live Server 即可打开
 - 使用快捷键注意：网页必须存放在文件夹中，并且 Vscode 已经打开这个文件夹
 - 开发时可以使用分屏模式，一边开发、一边呈现效果，所见即所得。电脑屏幕效果如下：
 
 ![Snipaste_2022-08-11_21-51-01](/core-foundation/basic/html/assets/Snipaste_2022-08-11_21-51-01.png)
 
 **方法三：**
 
 - 全局安装：
 ```
 npm run live-server -g
 ```
 - 启动命令：
 ```
 live-server
 ```
:::

### 4、常用浏览器

::: tip TIP

 浏览器是网页显示、运行的平台。常用浏览器有 IE、火狐（Firefox）谷歌（Google）、Safari（苹果官方）、Opera 、Edge（微软） 等

 全球浏览器市场份额：[https://gs.statcounter.com/browser-market-share](https://gs.statcounter.com/browser-market-share)
:::

### 5、浏览器内核

::: tip TIP
 浏览器内核（渲染引擎）：

 负责读取网页内容，整理信息，计算网页的显示方式并显示页面
:::

|浏览器|	内核|	说明|
|------|------|----|
|IE	|Trident|	IE 浏览器内核|
|Edge	|WebKit	|微软 Microsoft Edge（简称 ME 浏览器）|
|Chrome/Opera	|Blink	|由 Google 和 Opera Software 共同研发，Blink 其实是 WebKit 的分支，以前Google 是 WebKit 内核、现在是 Blink|
|Firefox	|Gecko	|火狐浏览器内核|
|Safari	|WebKit	|苹果浏览器内核|
|360、猎豹、2345 浏览器	|Trident+Blink	|双内核|
|UC、搜狗、遨游、QQ 浏览器	|Trident+Webkit	|双内核|
|百度（已关闭）、世界之窗浏览器	|Trident	|IE 浏览器内核|

## 二、认识 HTML5 骨架

```html
  <!--文档类型声明DTD-->
  <!DOCTYPE html>
  <!--<html></html> 标签对-->
  <html lang="en">
    <!--<head></head> 标签对-->
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <!--<body></body>标签对-->
    <body></body>
  </html>
```

### 1、文档类型声明 DTD

::: tip
 **定义和用法**
 
- `<!DOCTYPE>` 声明必须是 HTML 文档的第一行，位于`<html>`{.html} 标签之前。`
- `<!DOCTYPE>` 声明不是 HTML 标签，它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。
- 在 HTML 4.01 中，`<!DOCTYPE>` 声明引用 DTD，因为 HTML 4.01 基于 SGML。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。

**SGML（Standard Generalized Markup Language）**
 
- 即标准通用标记语言) SGML 是国际上定义电子文档和内容描述的标准。
- HTML5 不基于 SGML，所以不需要引用 DTD
:::

### 2、W3C 组织

::: tip 
- W3C 指万维网联盟（World Wide Web Consortium）是万维网的主要国际标准组织
- W3C 创建于 1994 年 10 月主要负责制定 WEB 标准
- W3C 由 Tim Berners-Lee（蒂姆·伯纳斯·李） 创建 ，被誉为 "互联网之父"
- W3C 是一个会员组织
- W3C 的工作是对 web 进行标准化
- W3C 创建并维护 WWW 标准
- W3C 标准也被称为 W3C 规范
- 主要是 HTML 和 CSS

 **W3C 组织官网：[https://www.w3.org/](https://www.w3.org/)**

- JavaScript 由 Brendan Eich 于 1995 年发明，并于 1997 年成为 ECMA 标准。
:::

### 3、网页组成

::: info
 **网页主要由三部分组成：**

 `结构（Structure）、表现（Presentation）和行为（Behavior）`{.code}
:::

|标准	|简介	|描述|
|----|-----|----|
|结构	|用于对网页元素进行整理和分类，即当下学习的 HTML	|网页的骨骼|
|表现	|表现用户设置网页元素的排版、颜色、大小修饰等外观样式，即 CSS	|网页的皮肤|
|行为	|行为是指网页模型的定义、交互等编写，即要学习的 JavaScript	|网页的神经|


::: info 
 **Web 标准提出的最佳体验方案：**

- 结构、样式、行为相分离
- 即：结构写在 HTML 文件中，表现写在 CSS 文件中，行为写在 JavaScript 文件中
:::

### 4、html 标签

```html
  <!--文档类型声明-->
  <!DOCTYPE html>
  <!--
      <html></html>标签
      lang 表示网页的语言，en表示英语，zh表示中文 ,不修改也行
      什么时候修改呢：如果网站有多国语言时修改，中文版、英语版、日语版、法语版等等，具体案例可参考 小米官网源码
  -->
  <html lang="en">
    <!-- <head></head>标签对，是网页的配置，不要认为是网页的头部 -->
    <head> </head>
    <!-- <body></body>标签对中书写网页的内容，包括网页的头部、主要内容、页脚等各个部分 -->
    <body></body>
  </html>
```

### 5、字符集

::: info  
- meta 元标签，表示网页的基础配置
- charset 字符集
- UTF-8 是一种字符集
 ```html
   <meta charset="UTF-8" /
 ```
- 在中国常见的字符集有两种 UTF-8 和 gb2312
:::

### 6、网页三要素

::: info
- title：网页的标题（30 字以内）
- 文字会显示在浏览器的标题栏上
- title 也是搜索引擎收录网站时显示的标题，为了吸引用户点击，合理的标题设置有利于 SEO 优化
- keywords：网页的关键词（关键词之间用英文状态下的逗号 "," 分隔）
- description：网页的描述（150 字以内）
:::

```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>艾编程-为每个互联网人提供高质量的终身学习平台</title>
      <meta name="Keywords" content="艾编程,WEB前端,Java架构师,Python课程" />
      <meta
        name="description"
        content="艾编程连接了国内外一线互联网公司整合一线师资和企业项目研发解决方案，面向互联网企业开发者提供Web前端、Java、Python、大数据、人工智能等技术在实际企业应用中的项目研发解决方案体系化在线课程。"
      />
    </head>
    <body></body>
  </html>
```

#### SEO 优化

::: info
 SEO（Search Engine Optimization）即：搜索引擎优化

 利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名。目的是让其在行业内占据领先地位，获得品牌收益。
:::

### 7、VSCode 中 HTML 模板代码解读

::: tip
 **meta 标签及属性的含义**
 
 ```html
 <!--IE8及以上的版本按照最新的标准去渲染-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
 ```
 
 **`X-UA-Compatible` 是什么？**
 
- X-UA-Compatible 是 IE8 的一个专有`<meta>`属性，它告诉 IE8 采用何种 IE 版本去渲染网页，在 html 的`<head>`标签中使用，IE8 以下版本不识别
- Edge 模式告诉 IE 以最高级模式渲染文档，也就是任何 IE 版本都以当前版本所支持的最高级标准模式渲染，避免版本升级造成的影响。
- 简单的说，就是什么版本 IE 就用什么版本的标准模式渲染。

 **最佳的兼容模式方案：**

 ```html
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
 ```
- 添加”chrome=1“ 将允许站点在使用了谷歌浏览器内嵌框架（Chrome Frame）的客户端渲染，对于没有使用的，则没有任何影响。
- 百度目前也是使用该模式

 `viewport`**主要用作移动端适配**
 
- width：用来设置 layout viewport 的宽度
- device-width ：设置成设备的实际宽度
- initial-scale=1.0 ：防止浏览器对页面进行缩放 1:1 显示，即不缩放
```html
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
:::

**完整解读**

```html
  <!--声明当前文档类型为 html5标准-->
  <!DOCTYPE html>
  <!--声明当前页面的语言类型-->
  <html lang="en">
    <head>
      <!--网页的编码集-->
      <meta charset="UTF-8" />
      <!--IE8及以上的版本按照最新的标准去渲染-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <!--用户移动端适配-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!--网页标题-->
      <title>艾编程</title>
      <!--网页关键词-->
      <meta name="Keywords" content="艾编程,WEB前端,Java架构师,Python课程" />
      <!--网页描述-->
      <meta name="description" content="为每个互联网人提供高质量的终身学习平台" />
    </head>
    <body></body>
  </html>
```

## 三、重新认识标签

### 1、什么是 HTML？

::: info
 **HTML 是用来描述网页的一种语言**
 
- HTML 指的是超文本标记语言 (Hyper Text Markup Language)
- HTML 不是一种编程语言，而是一种标记语言 (markup language)
- 标记语言是一套标记标签 (markup tag)
- HTML 使用标记标签来描述网页

 **注：超文本有两层含义**

- 它可以加入图片、声音、动画、多媒体等内容（超越了文本限制）
- 它还可以从一个文件跳转到另一个文件，与世界各地主机的文件连接（超级链接文本）
:::

### 2、HTML 标签

::: info
 **HTML 标记标签通常被称为 HTML 标签 (HTML tag)**
 
 HTML 标签是由`尖括号`包围的关键词，比如 `<html>`
 HTML 标签通常是成对出现的，比如 `<b></b>`
 标签对中的第一个标签是`开始标签`{.code}，第二个标签是`结束标签`{.code}
 开始和结束标签也被称为`开放标签`和`闭合标签`
:::

### 3、HTML 文档 = 网页

::: info
 **HTML 文档**
 
- HTML 文档 `描述网页`
- HTML 文档 `包含 HTML 标签和纯文本`
- HTML 文档也被称为`网页`

 Web 浏览器的作用是读取 HTML 文档，并以网页的形式显示出它们。 浏览器不会显示 HTML 标签，而是使用标签来解释页面的内容
:::

```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>HTML标签 - Arry老师</title>
    </head>
    <body>
      <h1>我是一个标题标签</h1>

      <p>我是一个段落标签</p>
    </body>
  </html>

  <!--

  以上代码案例解读：

  <html> 与 </html> 之间的文本描述网页
  <body> 与 </body> 之间的文本是可见的页面内容
  <h1> 与 </h1> 之间的文本被显示为标题
  <p> 与 </p> 之间的文本被显示为段落
  不同的标签有不同的功能比如：p标签表示段落，h1标签表示一级标题
  标签可以给文字设置不同的语义

  -->
```

### 4、单标签

::: tip
 有的标签不是成对出现的，而是只有起始标签，称之为**单标签**
 
```html
 <meta charset="UTF-8" />
```
在 HTML4 代中，单标签必须写一个结尾的反斜杠，HTML5 就不用写
```html
 <meta charset="UTF-8" />
```

现在，我们就能彻底理解 "超文本标记语言" 的含义啦
:::