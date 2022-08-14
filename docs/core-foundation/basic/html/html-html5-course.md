---
title: HTML/HTML5 常用标签和属性
icon: icon-html5
---

## 四、标题标签

::: tip TIP
 h 系列标签表示 “标题” 含义，h 是 headline(标题) 的意思
:::

### 1、h1~h6 标签

|标签	|语义|
|-----|----|
|h1	|一级标题|
|h2  |二级标题|
|h3  |三级标题|
|h4  |四级标题|
|h5  |五级标题|
|h6  |六级标题|

::: info 
**关于 h 标签详细解读**

- `<h1></h1>`标签的内容对于搜索引擎来说非常重要，相当于一篇文章的标题（主题）
- 应该将当前页面重要的内容放到 `<h1></h1>`标签中
- 关于h1 ~ h6 标签的使用 以百度百科 (opens new window)为标准
- `<h1></h1>`标签在一个网页中只能放置一个，否则会被搜索引擎视为作弊
```html
 <h1>我是h1标题标签</h1>
 <h2>我是h2标题标签</h2>
 <h3>我是h3标题标签</h3>
 <h4>我是h4标题标签</h4>
 <h5>我是h5标题标签</h5>
 <h6>我是h6标题标签</h6>
```
:::

### 2、h 标签在 SEO 优化中的设置技巧

::: info 
 **① 不同类型页面的设置**

- **首页**：网站首页的 H1 通常是网站 logo，强调 alt 的内容，而 alt 属性是网站首页标题，包含核心关键词，H2 标注分类页面，H3 标注内容页面标题链接。
- **列表页（栏目页）**：H1 设置为分类名称，H2 是子分类名称，H3 设置为内容页面标题链接。
- **内容页（产品详情页、文章页）**：H1 设置文章标题名称，H2 标注列表名称，H3 标注相关文章。

 **② H 标签包含关键词**
 
- H 标签是一个强调性的标签，因此，H1 标签中，必须包含核心关键词，H2、H3 标签可以适当的包含长尾关键词

 **③ 页面 H 标签的数量。**
 
- 一个页面上只能有 1 个 H1 标签，可以包含不等的 H2-H6 标签。从结构化的角度看，有 H3 就要有 H1、H2。
:::

## 五、段落标签

::: info 关于 p 标签详细解读

 `<p></p>`标签表示段落标签，p 是英语 Paragraph(段落)的意思
 任何段落都要放到 p 标签中，因为 HTML 代码中即使代码换行了，页面显示效果也不会换行，必须写在 `<p></p>`中
 `<p></p>`标签中不能嵌套 h 标签、其他 p 标签和其他块级元素
 p 标签中可可嵌套的标签有：
 ![pppppp.2dd52f76.png](/core-foundation/basic/html/assets/pppppp.2dd52f76.png)
:::

**模仿百度百科，写一个 h 标签和 p 标签的综合案例 ，以 "[前端开发](https://baike.baidu.com/item/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/10009024?fr=aladdin)" 为例。效果如下：**
![image-20211120221214045.a164d24c.png](/core-foundation/basic/html/assets/image-20211120221214045.a164d24c.png)

## 六、div 标签

::: info
 **关于 div 标签详细解读**
 
- `<div></div>`标签 是英语 division “分隔” 的缩写
- div 标签对是用来将相关内容组合到一起，以和其他内容分隔，使文档结构更清晰

 **比如：一般网页布局 头部，内容区，底部 都会通过 div 进行分隔**
 
- `<div></div>` 是最常见的 HTML 标签，因为它会结合 CSS 来使用，实现网页的布局，这种布局形式叫做 DIV +CSS
- `<div></div>` 像一个容器，什么都可以容纳，因此工程师们习惯称呼 div 为 盒子

 **事例如下：通过 Google 开发者工具查看网页的 DIV 布局**

![image-20211120233431632.ca4f8099.png](/core-foundation/basic/html/assets/image-20211120233431632.ca4f8099.png)
:::

**编写练习案例效果：**

![image-20211120234301486.0cca998e.png](/core-foundation/basic/html/assets/image-20211120234301486.0cca998e.png)

## 七、HTML5 特性

### 1、空白折叠现象

::: tip
- 文字和文字之间的多个空格、换行会被折叠成一个空格
- 标签 内壁 和 文字之间的空格会被忽略
:::

```html
  <body>
    <h1>HTML5特性：空白折叠现象</h1>

    <h2>文字和文字之间的多个空格、换行会被折叠成一个空格</h2>
    <p>文本内容 文本内容</p>

    <h2>标签 内壁 和 文字之间的空格会被忽略</h2>
    <p>文本内容文本</p>
  </body>
```
![image-20211120235244134.50c6ac2d.png](/core-foundation/basic/html/assets/image-20211120235244134.50c6ac2d.png)

### 2、常用转义符

|显示结果	|描述	|实体名称|
|---------|-----|------|
|空格|	|&nbsp;|
|<	|小于号	|&lt;|
|>	|大于号	|&gt;
|&	|&符号|	&amp;|
|"	|双引号	|&quot;|
|©	|版权	|&copy;|
|®	|已注册商标|	&reg;|

```html
  <body>
    <h1>HTML常用转义符</h1>

    <p>空格：&nbsp;&nbsp;&nbsp; 这是三个空格</p>
    <p>大于号：&gt;</p>
    <p>小于号：&lt;</p>
    <p>&符号：&amp;</p>
    <p>“双引号：&quot;</p>
    <p>版权符号：&copy;</p>
    <p>已注册商标：&reg;</p>

    <p>在网页中直接显示原标签:</p>

    显示p标签 &lt;p>&lt;/p> <br /><br />

    显示div标签：&lt;div&gt;&lt;/div&gt;
  </body>
```
![image-20211121001254290.3557e8f1.png](/core-foundation/basic/html/assets/image-20211121001254290.3557e8f1.png)

### 3、HTML 的注释

::: tip
 **对于 程序开发人员最讨厌的两件事：**

- 讨厌自己加注释
- 讨厌别人的代码不加注释
- 添加注释的重要性：

- 提高代码的可阅读性，方便自己阅读或他人阅读
- 增强代码的可维护性

 **注：**

- 注释在网页中是不显示的，只有自己能看到

 **HTML 注释的语法：**
 ```html
 <!--注释内容-->
 ```
 在 Vscode 中，可以使用快捷键 Ctrl + / 添加
:::

## 八、列表标签

HTML5 中提供了三种列表标签

|标签	|语义|
|-----|----|
|<ul></ul>	|无序列表 （没有刻意的顺序）|
|<ol></ol>	|有序列表|
|<dl></dl>	|定义列表|

### 1、无序列表 - 基础语法

::: tip 语法
- 无序列表使用 `<ul></ul>`标签，是英文单词unordered list（不排序列表） 缩写
- 每个列表项都是 `<li></li>`标签，是英文单词 list item（列表项目）缩写
- 无序列表是一个父子组合标签，上阵父子兵，不能单独出现
- `<ul>` 父标签，li 子标签
:::

```html
  <h1>无序列表</h1>
  <ul>
    <li>小炒肉</li>
    <li>小龙虾</li>
    <li>剁椒鱼头</li>
    <li>酸辣白菜</li>
    <li>7分熟牛排</li>
  </ul>
```

::: warning
- ul ，li 标签是嵌套形式，li 标签必须要缩进（一个 Tab）
- li 标签不能单独使用
- ul 的子标签只能是 li
- li 标签中是可以放任何标签的
:::

### 2、无序列表 - 列表嵌套

```html
  <h1>无序列表-嵌套</h1>

  <ul>
    <li>
      <h2>北京市</h2>
      <ul>
        <li>海淀区</li>
        <li>东城区</li>
        <li>朝阳区</li>
        <li>石景山区</li>
      </ul>
    </li>
    <li>
      <h2>上海市</h2>
      <ul>
        <li>黄浦区</li>
        <li>浦东新区</li>
        <li>徐汇区</li>
        <li>静安区</li>
      </ul>
    </li>
  </ul>
```

界面显示

![Snipaste_2022-08-12_19-46-23.png](/core-foundation/basic/html/assets/Snipaste_2022-08-12_19-46-23.png)

### 3、无序列表的 type 属性

::: info
 **type 属性**

- 无序列表有 type 属性，可以定义前导符号的样式，但在 HTML5 中已经被废弃，建议使用 CSS 替代
- 只作为学习和了解即可
:::

|属性 |值   |描述 |
|-----|-----|----|
|type	|disc	默认值，|实心圆|
|type	|square	|实心正方形|
|type	|circle	|空心圆|

::: warning
 **注意:**

 -在 HTML 4 中的 ul 属性已废弃，HTML5 已不支持该属性，因此我们使用 CSS 代替来定义不同类型的无序列表如下：
:::

```html
  <h1>无序列表标签</h1>
  <p>ul的type属性在HTML5中已经废弃</p>

  <h2>type="square" 实心正方形</h2>
  <ul type="square">
    <li>小炒肉</li>
    <li>小龙虾</li>
    <li>剁椒鱼头</li>
    <li>酸辣白菜</li>
    <li>7分熟牛排</li>
  </ul>

  <h2>type="circle" 空心圆</h2>
  <ul type="circle">
    <li>小炒肉</li>
    <li>小龙虾</li>
    <li>剁椒鱼头</li>
    <li>酸辣白菜</li>
    <li>7分熟牛排</li>
  </ul>
```
界面显示

![image-20211121172542621-16568724944295.65a540d2](/core-foundation/basic/html/assets/image-20211121172542621-16568724944295.65a540d2.png)

::: warning 注：

- 在 HTML5 中使用 CSS 代替来定义不同类型的无序列表
:::

```html
  <h1>无序列表标签</h1>
  <p>ul的type属性在HTML5中已经废弃，使用CSS替代</p>

  <h2>style="list-style-type:disc" 实心圆</h2>
  <ul style="list-style-type:disc">
    <li>小炒肉</li>
    <li>小龙虾</li>
    <li>剁椒鱼头</li>
    <li>酸辣白菜</li>
    <li>7分熟牛排</li>
  </ul>

  <h2>style="list-style-type:square" 实心正方形</h2>
  <ul style="list-style-type:square">
    <li>小炒肉</li>
    <li>小龙虾</li>
    <li>剁椒鱼头</li>
    <li>酸辣白菜</li>
    <li>7分熟牛排</li>
  </ul>

  <h2>style="list-style-type:circle" 空心圆</h2>
  <ul style="list-style-type:circle">
    <li>小炒肉</li>
    <li>小龙虾</li>
    <li>剁椒鱼头</li>
    <li>酸辣白菜</li>
    <li>7分熟牛排</li>
  </ul>
```
界面显示

![image-20211121172959993-16568725093787.c36c897d](/core-foundation/basic/html/assets/image-20211121172959993-16568725093787.c36c897d.png)

### 4、无序列表在开发中的使用

::: info
- 导航栏
- 各种页面 list 列表
- ..... 基本常见网站导航、列表页都会使用 ul li 无序列表标签
:::

![image-20220704150756466.433e47d6](/core-foundation/basic/html/assets/image-20220704150756466.433e47d6.png)

### 5、有序列表 - 基础语法

> 有刻意顺序的列表就叫做 有序列表

![image-20211121174020363-16568724127571.cc33102b](/core-foundation/basic/html/assets/image-20211121174020363-16568724127571.cc33102b.png)

::: tip
 **关于有序列表**

 有序列表使用 `<ol></ol>`标签，每个列表项都是`<li></li>`标签
 `<ol>`标签是英文 ordered list（排序列表） 缩写
 ol 的特性与 ul li 同理
:::

```html
  <h1>编程语言排行榜</h1>
  <ol>
    <li>JavaScript</li>
    <li>Python</li>
    <li>C/C++</li>
    <li>Java</li>
  </ol>
```

![image-20211121174947822-16568725304449.a7841f6a](/core-foundation/basic/html/assets/image-20211121174947822-16568725304449.a7841f6a.png)

### 6、有序列表 ol 的 type 属性

::: tip
 ol 标签可以设置 type 属性，用来设置编号的类型
:::

|type 属性值|描述|
|----------|----|
|1	|数字编号（默认值）|
|A	|大写英文字母编号|
|a	|小写英文字母编号|
|I	|大写罗马数字编号|
|i	|小写罗马数字编号|

```html
  <h1>编程语言排行榜</h1>
  <p>ol type属性值</p>

  <ol type="1">
    <li>JavaScript</li>
    <li>Python</li>
    <li>C/C++</li>
    <li>Java</li>
  </ol>

  <ol type="A">
    <li>JavaScript</li>
    <li>Python</li>
    <li>C/C++</li>
    <li>Java</li>
  </ol>
```

![image-20211121185255670-165687317743611.0943272c](/core-foundation/basic/html/assets/image-20211121185255670-165687317743611.0943272c.png)

### 7、有序列表 ol 的 start 属性

::: info start 属性

- start属性值必须是一个整数，制定了列表编号的起始值
- 此属性的值阿拉伯数字，即使 ol 指定了 type 属性值
:::

```html
  <h1>编程语言排行榜</h1>
  <p>ol type属性值 和 start属性值</p>

  <ol type="1" start="3">
    <li>JavaScript</li>
    <li>Python</li>
    <li>C/C++</li>
    <li>Java</li>
  </ol>

  <ol type="A" start="2">
    <li>JavaScript</li>
    <li>Python</li>
    <li>C/C++</li>
    <li>Java</li>
  </ol>

  <ol type="a" start="6">
    <li>JavaScript</li>
    <li>Python</li>
    <li>C/C++</li>
    <li>Java</li>
  </ol>
```
![image-20211121185255670-165687317743611.0943272c](/core-foundation/basic/html/assets/image-20211121185255670-165687317743611.0943272c.png)

### 8、有序列表 ol 的 reversed 属性

::: info reversed 属性

- reversed 属性是 HTML5 中的新属性
- reversed 属性是一个布尔属性
- reversed 属性指定列表中的条目是否是倒序排列的
- reversed 属性不需要值，只需要写 reversed 单词即可
:::

```html
  <h1>有序列表 ol的reversed属性（倒序排列）</h1>
  <ol type="1" reversed>
    <li>JavaScript</li>
    <li>Python</li>
    <li>C/C++</li>
    <li>Java</li>
  </ol>
```

### 9、定义列表9、定义列表

::: info 需要逐条给出定义描述的列表，就是定义列表

- 定义列表使用 `<dl></dl>`标签，是英文单词definition list（定义列表） 缩写
- `<dt></dt>`标签，是英文单词 data term（数据项）缩写
- `<dd></dd>`标签，是英文单词 data definition (数据定义)缩写
- dd 标签内容是对dt 标签的解释说明
- 案例以小米官网首页 底部
:::

![image-20211121204849666-165687320818613.4f3372c4](/core-foundation/basic/html/assets/image-20211121204849666-165687320818613.4f3372c4.png)

> `<dl>`是定义列表标签，内容交替出现 `<dt>、<dd>`标签

```html
  <h1>定义列表 - dt dd标签交替出现</h1>
  <dl>
    <dt>服务支持</dt>
    <dd>售后政策</dd>
    <dd>关注我们</dd>
    <dd>自助服务</dd>

    <dt>关注我们</dt>
    <dd>新浪微博</dd>
    <dd>官方微信</dd>
    <dd>关于我们</dd>
  </dl>
```

> 也允许 dt 和 dd 不交替出现，而是分别处于不同定义列表 dl 中
> 这么写，可以有更多的 dl ，可以更好的服务 css 样式


```html
  <h1>定义列表 dt dd 不交替出现</h1>

  <dl>
    <dt>服务支持</dt>
    <dd>售后政策</dd>
    <dd>关注我们</dd>
    <dd>自助服务</dd>
  </dl>

  <dl>
    <dt>关注我们</dt>
    <dd>新浪微博</dd>
    <dd>官方微信</dd>
    <dd>关于我们</dd>
  </dl>
```

## 九、多媒体标签

### 1、图片标签 img

::: info
 **（1）语法和基础**
 
 `<img>`标签用来在网页中插入图片
 
 ```html
 <img src="images/logo.png" />
 ```

- img 是 英语单词image（图片）的缩写
- src 是 英语单词source（来源）的缩写
- "" 中是 图片的 存储目录和完整的文件名

 **注：**
 
- 图片必须存放在项目文件夹中，如：images 中
- 图片只是引入到网页中，本质上没有被插入到网页中

 **（2）img 标签的 alt 属性**
 
- alt 属性是英语 alternate（代替者）缩写，对图像的文本描述，不强制
- 若由于某种原因无法加载图像，浏览器会在页面上显示 alt 属性中的备用文本
- 供视力不方便的用户使用的网页朗读器，也会朗读 alt 中的文本
- 对于搜索引擎优化友好，告诉搜索引擎图片的含义，利于搜索引擎爬虫抓取

```html
 <img src="images/logo.png" alt="艾编程Logo" />
 ```
 **（3）img 标签的 width、height 属性**
 
- width、height 属性设置图片宽度和高度，单位是 PX（像素），可不写
- 如果省略其中一个属性，则表示按原始比例缩放图片
```html
 <img src="images/logo.png" alt="艾编程Logo" width="200" />
```

**（4）图片标签规范**
 
- PC 端 img 图片必须填写 src、width、height、alt 属性，统称图片标签的四要素
- 移动端必须填写 alt 属性
- alt 不能为无意义字符，需要能表现出图片的含义，如图片为道具图，则应该为道具的名称
:::

### 2、网页上支持的图片格式

|支持格式	|描述|
|--------|-----|
|.bmp	Windows |画图软件默认保存的格式，位图|
|.jpeg（.jpg）	|有损压缩图片，通常用于照片显示|
|.png	|便携式网络图像，用于 logo，背景图形等。支持透明和半透明|
|.gif	|动画 ，如：表情包|
|.svg	|矢量图片|
|.webp	|最新的压缩算法，非常优秀的图片格式|

> 实战演练 ......

### 3、相对路径和绝对路径

::: tip
 **相对路径**
 
- 从当前网页出发，要找到图片的路径就叫 相对路径
```html
 <img src="images/logo.png" />
 <img src="../images/logo.png" />
 <img src="../../images/logo.png" />
 .....
 ```
- ../ 表示回退上一级目录
- ./ 表示当前目录
- 通过 cmd命名行 dir命令可查
 ![image-20211121213542488-165687323244615.2cdf69a7](/core-foundation/basic/html/assets/image-20211121213542488-165687323244615.2cdf69a7.png)
 
 **绝对路径**
 
- 描述文件或文件夹的精准完整地址
```html
 <img src="D:\web\icoding-web\images\logo.png" />
 <img
   src="https://www.icodingedu.com/files/system/2019/09-25/22132557f330499313.png"
 />
```
:::
### 4、超级链接 - a 标签

（1）语法和基础

::: tip 超级链接是网页与网页之间链接跳转的方法

- `<a></a>`标签是英语 anchor 锚的首字母
- href 属性是英语 hypertext reference （超文本引用）缩写
```html
 <a href="https://www.baidu.com">百度一下，你就知道</a>
```
:::

（2）a 标签的 href 属性

::: tip href 属性支持相对路径和绝对路径

```html
 <a href="./index.html">进入首页</a>
 <a href="../index.html">进入首页</a>
 <a href="D:\web\icoding-web\index.html">进入首页</a>
 <a href="https://www.icodingedu.com">艾编程</a>
 ```
:::

（3）a 标签的 title 属性

::: info 
 **a 标签的 title 属性用户设置鼠标的悬停文本**
```html
 <a href="https://www.baidu.com" title="点击，进入百度官网">百度一下，你就知道</a>
```
:::

（4）a 标签的 target 属性

::: tip TIP
 
 |target 属性值	|描述|
 |------------|----|
 |_blank/blank	|在新窗口中打开网页|
 |_self 默认|当前页面跳转|
 
 **注：HTML4 中 blank 之前有个下划线 _blank 都可使用**
 
```html
 <h1>超级链接 - a标签</h1>
  <a href="https://www.baidu.com">百度一下，你就知道</a>
  <h2>a 标签的 target 属性</h2>
  <a href="https://www.baidu.com" target="blank">_blank：新窗口打开</a ><br /><br />
  <a href="https://www.baidu.com" target="_self">_self：默认，当前页面跳转</a>
```

给图片添加超级链接：点击图片标签跳转连接
```html
 <a href="https://www.baidu.com" target="blank">
   <img src="images/logo.png" />
 </a>
```
:::

（5）页面锚点

::: tip TIP

- 对于很长的页面，可以对应的标签添加 id属性，将它变成页面的 "锚点"
- 当点击锚点连接时，浏览器地址栏就会出现 #id属性名称 页面就会自动滚动到锚点处
- 从其他页面页面点击带#号的链接，就可以直接定位到锚点位置
:::

```html
  <h1>页面锚点链接</h1>

  <p>
    <a href="#phone">小米手机</a> &nbsp;&nbsp;&nbsp;
    <a href="#zn">智能穿戴</a> &nbsp;&nbsp;&nbsp;
    <a href="#jd">家电</a> &nbsp;&nbsp;&nbsp;
    <a href="#sh">生活电器</a> &nbsp;&nbsp;&nbsp;
    <a href="#cf">厨房电器</a> &nbsp;&nbsp;&nbsp;
    <a href="#jj">智能家居</a> &nbsp;&nbsp;&nbsp;
    <a href="#cx">出行搭配</a> &nbsp;&nbsp;&nbsp;
    <a href="#bh">日用百货</a>
  </p>

  <h2 id="phone">小米手机</h2>
  <img src="images/1.webp" alt="" />

  <h2 id="zn">智能穿戴</h2>
  <img src="images/2.webp" alt="" />

  <h2 id="jd">家电</h2>
  <img src="images/3.webp" alt="" />

  <h2 id="sh">生活电器</h2>
  <img src="images/4.webp" alt="" />

  <h2 id="cf">厨房电器</h2>
  <img src="images/5.webp" alt="" />

  <h2 id="jj">智能家居</h2>
  <img src="images/6.webp" alt="" />

  <h2 id="cx">出行搭配</h2>
  <img src="images/7.webp" alt="" />

  <h2 id="bh">日用百货</h2>
  <img src="images/8.webp" alt="" />

  <p>
    <a href="#top">回到顶部</a>
  </p>

```
![image-20211121224128869-165687325399317.b6ed1c25](/core-foundation/basic/html/assets/image-20211121224128869-165687325399317.b6ed1c25.png)

::: note 注：
 
- 在 HTML5 中 直接使用 #top即可回到顶部，不用定义 id="top"
 
- <a href="#top">回到顶部</a>
:::

（6）特殊链接（下载、邮件、电话）

::: warning
 **下载链接**

- 指向 exe、zip、rar、word、excel 等文件格式的链接，将自动成为下载链接
:::

```html
  <h1>特殊链接</h1>

  <h2>下载链接</h2>

  <a href="doc/1.zip">web前端学习资料zip下载地址</a>

  <br /><br />

  <a href="doc/1.doc">学习资料doc文档</a>
```

![image-20211121225420879-165687328187819.7d2f8d37](/core-foundation/basic/html/assets/image-20211121225420879-165687328187819.7d2f8d37.png)

::: tip 
 **邮件链接**

- mailto: 前缀的链接 即 邮件链接
- 系统将自动打开 email 相关软件，即可发送邮件
```html
 <a href="mailto:arry@icodingedu.com">给arry老师发邮件</a>
```
 
 **电话链接**
- tel:前缀的链接 即 电话链接
- 系统将自动打开手机拨号键
```html
 <a href="tel:18966666666">给arry老师打电话</a>
```
:::

### 5、音频和视频

::: tip TIP
 
- 早年在网页中插入音视频需要使用 Flash 技术，当下基本已经淘汰
- 可直接使用 HTML5 标签轻松在网页中像插入图片一样插入音频和视频即可
:::

（1）音频标签

::: tip TIP

- `<audio>`标签可直接在网页中插入音频，并自动生成默认的编辑器
- controls 属性 ，显示播放空间
- src 音频路径
- 标签对中对不兼容 audio 标签的浏览器所显示的文字
- 浏览器中常用的音频格式：mp3 和 ogg 格式
```html
 <audio controls src="mp3/不错哟.mp3">
   亲爱的，您的浏览器不支持audio标签，请升级您的浏览器哟 ^_^
 </audio>
```
 ![image-20211121231307959-165687330190921.9cfc6845](/core-foundation/basic/html/assets/image-20211121231307959-165687330190921.9cfc6845.png)
 
 **音频标签部分属性：**

- autoplay 音频自动播放，不会等待整个音频文件下载完成
- loop 循环播放音频
:::

（2）音频标签 audio 的子标签

::: tip TIP
 
 source 标签为媒体元素定义媒体资源，该标签允许定义多个格式的音视频文件，供浏览器选择自己支持的媒体类型进行播放
 |Format	|MIME-type	|描述|
 |-------|-----------|----|
 |MP3	|audio/mpeg	|一种音频压缩技术，用来大幅度的降低音频数据量|
 |Ogg	|audio/ogg	|一种新的音频压缩格式，是完全免费、开发和没有专利限制的|
 |Wav	|audio/wav	|微软公司开发的一种声音文件格式，声音文件质量和 CD 相差无几|

- 浏览器需要选择它支持格式的源文件进行播放，如果都支持则任选一个（默认选择第一个）
 ```html
 <h2>audio 子标签 source</h2>
 
 <audio controls>
   <source src="audio/不错哟.mp3" type="audio/mpeg" />
   <source src="audio/不错哟.ogg" type="audio/ogg" />
   <source src="audio/不错哟.wav" type="audio/wav" />
   亲爱的，您的浏览器不支持audio标签，请升级您的浏览器哟 ^_^
 </audio>
 ```
 ![low](/core-foundation/basic/html/assets/low.png)
:::

（2）音频标签 audio 的子标签

::: tip TIP
 
 source 标签为媒体元素定义媒体资源，该标签允许定义多个格式的音视频文件，供浏览器选择自己支持的媒体类型进行播放
 
 |Format	|MIME-type	|描述|
 |--------|----------|----|
 |MP3	|audio/mpeg	|一种音频压缩技术，用来大幅度的降低音频数据量|
 |Ogg	|audio/ogg	|一种新的音频压缩格式，是完全免费、开发和没有专利限制的|
 |Wav	|audio/wav	|微软公司开发的一种声音文件格式，声音文件质量和 CD 相差无几|
 
- 浏览器需要选择它支持格式的源文件进行播放，如果都支持则任选一个（默认选择第一个）
```html
 <h2>audio 子标签 source</h2>
 
 <audio controls>
   <source src="audio/不错哟.mp3" type="audio/mpeg" />
   <source src="audio/不错哟.ogg" type="audio/ogg" />
   <source src="audio/不错哟.wav" type="audio/wav" />
   亲爱的，您的浏览器不支持audio标签，请升级您的浏览器哟 ^_^
 </audio>
```
 ![1234](/core-foundation/basic/html/assets/1234.png)
:::

（3）视频标签 video 的子标签

::: tip TIP
 
 |Format	|MIME-type	|描述|
 |-------|-----------|----|
 |mp4	|video/mp4	|MP4 = MPEG 4 文件使用 H264 视频编解码器和 AAC 音频编解码器|
 |webm	|video/webm	|WebM 文件使用 VP8 视频编解码器和 Vorbis 音频编解码器|
 |avi	|video/avi	|avi 文件支持 256 色和 RLE 压缩，他对视频文件采用了一种有损压缩方式|
 |ogv	|video/ogv	|Ogg 文件使用 Theora 视频编解码器和 Vorbis 音频编解码器|
 
 **浏览器需要选择它支持格式的源文件进行播放，如果都支持则任选一个（默认选择第一个）**
 ```html
 <h2>video 子标签 source</h2>
 
 <video controls width="500">
   <source src="video/1.mp4" type="video/mp4" />
   <source src="video/1.webm" type="video/webm" />
   <source src="video/1.ogv" type="video/ogv" />
   <source src="video/1.avi" type="video/avi" />
   亲爱的，您的浏览器不支持video标签，请升级您的浏览器哟 ^_^
 </video>
 ```
 ![image-20211122001122438-165687333470325.d4bc647b](/core-foundation/basic/html/assets/image-20211122001122438-165687333470325.d4bc647b.png)>
::: 

## 十、语义化标签

### 1、HTML 文本格式化标签

（1）span 标签

::: tip TIP
- `<span>`标签是文本中的区块标签，没有任何显示的效果，可以结合 css 来定位区块的样式
- 需要被特殊标记的元素也会使用 span 标签
:::

```html
  <h1>语义化标签</h1>

  <h2>span 标签</h2>

  <p>
    商品价格：
    <span>368</span>元，优惠价：<span>298</span>元
  </p>
```

（2）文本格式化标签

|标签	|描述|
|----|-----|
|`<b>{.html}`	|定义粗体文本 （已被 CSS 替代）|
|`<em>`{.html}	|定义着重文字 （被强调的文本）|
|`<i>`{.html}	|定义斜体字（已被 CSS 替代）|
|`<u>`	|定义文字的下划线（已被 CSS 替代）|
|`<strong>`	|定义加重语气，表示特别重要的文字|
|`<sub>`	|定义下标字|
|`<sup>`	|定义上标字|
|`<del>`	|定义删除字|
|`<pre>`	|定义预格式文本。被包围在 pre 标签 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。 pre 标签的一个常见应用就是用来表示计算机的源代码。|
|`<mark>`	|一段需要被高亮的文本（HTML5 新标签）|
|`<figure`>	|代表一段独立的内容，与说明 figcaption 标签配合使用。figure 标签规定独立的流内容（图像、图表、照片、代码等等）。|
|`<figcaption>`	|一个独立的引用单元，标签为`<figure>` 元素定义标题|

```html
  <h1>语义化标签</h1>

  <h2>span 标签</h2>
  <p>
    商品价格：
    <span>368</span>元，优惠价：<span>298</span>元
  </p>

  <h2>文本格式化标签</h2>
  b标签：<b>定义粗体文本</b> <br /><br />
  em标签：<em>表示被强调的文本</em> <br /><br />
  i标签：<i>斜体</i> <br /><br />
  u标签：<u>定义文本下划线</u> <br /><br />
  strong标签：<strong>定义加重语气，表示特别重要的文字</strong><br /><br />
  del标签：<del>定义删除字 </del><br /><br />
  mark标签：<mark>一段需要被高亮的文本</mark>

  <h3>sub 标签</h3>
  <p>碳在氧气中充分燃烧：C + O<sub>2</sub> = CO<sub>2</sub></p>
  <p>铁在氧气中燃烧： 3Fe + 2O<sub>2</sub> = Fe<sub>3</sub>O<sub>4</sub></p>

  <h3>sup 标签</h3>
  <p>2<sup>3</sup> + 3<sup>2</sup> = 17</p>

  <h3>pre 预格式化文本</h3>
  <pre>
    预格式化文本
    
    被包围在 pre标签 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体

    pre 标签的一个常见应用就是用来表示计算机的源代码。

  </pre>

  <h3>figure、figcaption 标签</h3>
  <p>
    代表一段独立的内容，与figcaption配合使用。figure
    标签规定独立的流内容（图像、图表、照片、代码等等）。一个独立的引用单元，标签为figure
    元素定义标题
  </p>
  <p>
    <figure>
      <img src="images/6.webp" alt="" />
      <figcaption>小米智能家居，智能门锁</figcaption>
    </figure>

    <figure>
      <img src="images/7.webp" alt="" />
      <figcaption>小米智能家居，平衡车</figcaption>
    </figure>
  </p>
```
![image-20211122204318903-165687335464827.d89109fd](/core-foundation/basic/html/assets/image-20211122204318903-165687335464827.d89109fd.png)

### 2、HTML5 区块标签

|标签	|描述|
|-----|----|
|`<section>`{.code}	|文档的区域，语义比 div 大|
|`<article>`{.code}	|文档的核心文章内容，会被搜索引擎主要抓取|
|`<aside>`{.code}	|文档的非必要相关内容，比如：广告 等|
|`<nav>`{.code}	|导航条|
|`<header>`{.code}	|页头|
|`<main>`{.code}	|网页核心部分|
|`<footer>`{.code}	|页脚|

```html
  <!-- 网页的头部 -->
  <header>
    <div>
      <h1>网页的logo</h1>
    </div>
    <!-- 导航栏 -->
    <nav>网页的导航</nav>
  </header>

  <!-- 网页的核心 -->
  <main>
    <!-- banner广告栏 -->
    <aside>banner广告</aside>

    <!-- 商品信息 -->
    <article>
      <h2>商品标题</h2>
      <section>商品信息1</section>
      <section>商品信息2</section>
      <section>商品信息3</section>
    </article>
  </main>

  <!-- 页脚 -->
  <footer></footer>
```

## 十一、表单元素

::: tip TIP
 
- HTML 表单用于收集不同类型的用户输入
- 如：登录、注册、发布、提交、编辑信息 等等
- 类似效果如下图：
:::

![image-20211122220956417-165687337494729.198ce453](/core-foundation/basic/html/assets/image-20211122220956417-165687337494729.198ce453.png)

### 1、HTML 表单基本用法

::: tip TIP
 
- 所有的 HTML 表单都是以一个 `<form>`元素包裹
- action属性：提交表单时向何处发送表单数据
- method属性：规定用于发送表单数据的 HTTP 方法
 ```html
 <h1>HTML的form表单</h1>

 <form action="/user/login" method="get">......</form>
 ```
:::

### 2、单行文本框

::: tip TIP

|标签	|属性	|描述|
|-----|-----|---|
|`<input>`{.html}	|type="text"	|单行文本框，单标签|
|`<input>`{.html}	|value="艾编程"	|文本框的值|
|`<input>`{.html}	|placeholder="请输入用户名 ..."	|提示文本，以浅灰色显示在文本框中，并不是文本框中的值|
|`<input>`{.html}	|disabled	|表示用户不能与元素交互，即：禁用|

```html
<form action="/user" method="POST">
 <p>用户名：<input type="text" /></p>
 <p>真实姓名：<input type="text" placeholder="请输入您的真实姓名 ..." /></p>
 <p>所在城市：<input type="text" value="北京市海淀区" disabled /></p>
</form>
```
:::

### 3、密码框

::: tip TIP
 
- 与单行文本框类似，其属性为 type="password" 显示内容为 隐藏
```html
 请输入密码：<input type="password" />
```
:::

![password](/core-foundation/basic/html/assets/password.png)

### 4、单选按钮

::: tip TIP
 
 |标签	|属性	|描述|
 |-----|-----|----|
 |<input>	|type="radio"	|单选按钮|
 |<input>	|name="自定义名称"	|设置 互斥 ，需将多个 name 属性为相同的值|
 |<input>	|value=""	|向服务器提交的值|
 |<input>	|checked	|表示默认被选中|
 性别： <input type="radio" name="sex" /> 男 <input type="radio" name="sex" /> 女
 ```html
 <input type="radio" name="sex" checked /> 保密
 ```
 ![radio](/core-foundation/basic/html/assets/radio.png)
- 以上代码，点击 文字时，不能选中按钮，需要使用 label标签
:::

### 5、label 标签

::: tip
 **用来将文字和单选按钮进行绑定**
 
 当用户单击文字时，等于点击了单选按钮 ，在HTML5中直接使用` label` 标签包裹 单选按钮和文字 即可
 
 ```html
 性别：
 <label> <input type="radio" name="sex" /> 男 </label>
 <label> <input type="radio" name="sex" /> 女 </label>
 <label> <input type="radio" name="sex" checked /> 保密 </label>
 ```
 
 **在 HTML4 中**
 
- label 标签是通过 for 属性和单选按钮的 id 属性进行绑定的

```html
 所在城市：
 <input type="radio" name="city" id="beijing" />
 <label for="beijing">北京市</label>
 
 <input type="radio" name="city" id="shanghai" />
 <label for="shanghai">上海市</label>
 
 <input type="radio" name="city" id="shenzhen" />
 <label for="shenzhen">深圳市</label>
 ```
 ![label](/core-foundation/basic/html/assets/label.png)
:::

### 6、复选框

|标签	|属性	|描述|
|------|----|---|
|<input>	|type="checkbox"	|复选框|
|<input>	|name="自定义名称"	|同组复选框应该设置 name 为相同值|
|<input>	|value=""	|向服务器提交的值|
|<input>	|checked	|表示默认被选中|

```html
  兴趣爱好：
  <label>
    <input type="checkbox" name="hobby" checked value="篮球" /> 篮球
  </label>
  <label> <input type="checkbox" name="hobby" value="乒乓球" /> 乒乓球 </label>
  <label> <input type="checkbox" name="hobby" value="书法" /> 书法 </label>
  <label>
    <input type="checkbox" name="hobby" value="跑步健身" /> 跑步健身
  </label>
```
![checkbox](/core-foundation/basic/html/assets/checkbox.png)

### 7、下拉菜单

::: tip TIP
 
- `<select>`标签，即 下拉菜单
- `<option>`是内部选项
 ```html
 请选择 省：
 <select>
   <option value="湖北省">湖北省</option>
   <option value="湖南省">湖南省</option>
   <option value="安徽省">安徽省</option>
   <option value="陕西省">陕西省</option>
 </select>
 市：
 <select>
   <option value="西安市">西安市</option>
 </select>
 区：
 <select>
   <option value="雁塔区">高新区</option>
 </select>
 ```
:::


### 8、多行文本框

::: tip TIP
 
- `<textarea>` 表示多行文本框
- 有 rows和cols属性，用于定义多行文本框的行数和列数
```html
 用户评论： <textarea cols="100" rows="10"></textarea>
```
:::

### 9、按钮

|标签	|属性	|描述|
|-----|-----|----|
|<input>	|type="button"	|普通按钮，也可以简写为 <button></button>|
|<input>	|type="submit"	|提交按钮|
|<input>	|type="reset"	|重置按钮|

```html
  <button>我是一个button标签，是一个普通按钮</button>
  <input type="button" value="我是一个普通按钮" />
  <input type="submit" value="提交表单信息" />
  <input type="reset" value="重 置" />
```

总结，常用表单控件


|标签	|type |属性	|描述|
|-----|-----|----|---|
|<input>	|text	|单行文本框|
|<input>	|radio	|单选按钮|
|<input>	|checkbox	|复选框|
|<input>	|password	|密码框|
|<input>	|button	|普通按钮，也可以简写为 <button></button>|
|<input>	|submit	|提交按钮|
|<input>	|reset	|重置按钮|

![image-20211123001408783-165687345772739.9e92791a](/core-foundation/basic/html/assets/image-20211123001408783-165687345772739.9e92791a.png)

### 10、HTML5 新增表单控件

|标签	|type |属性	|描述|
|------|-----|----|----|
|<input>	|color	|颜色选择控件|
|<input>	|date、time	|日期、时间选择控件|
|<input>	|email	|电子邮件输入控件|
|<input>	|file	|文件选择控件|
|<input>	|number	|数字输入控件|
|<input>	|range	|拖拽条控件|
|<input>	|search	|搜索框|
|<input>	|url	|网址输入控件|

> 注：兼容到 IE9，手机端完全兼容

```html
  <h1>HTML5新增表单控件</h1>

  <form>
    <p>
      颜色选择：
      <input type="color" />
    </p>
    <p>
      日期选择：
      <input type="date" />
    </p>
    <p>
      时间选择：
      <input type="time" />
    </p>
    <p>
      电子邮件（提交自动校验）：
      <input type="email" />
    </p>
    <p>
      必填项：
      <input type="text" required />
    </p>
    <p>
      数字（min最小值，max最大值）：
      <input type="number" min="2" max="10" />
    </p>
    <p>
      拖拽条：
      <input type="range" min="10" max="50" />
    </p>
    <p>
      搜索框（多一个清空按钮）：
      <input type="search" />
    </p>
    <p>
      网址：
      <input type="url" />
    </p>
    <p>
      <input type="submit" value="提交表单信息" />
    </p>
  </form>
```

::: info datalist 控件

- 为输入框提供一些备选项，当用户输入的内容与备选项文字相同时，将会显示智能提示感应
:::

```html
  datalist 控件：
  <input type="text" list="language-list" />
  <datalist id="language-list">
    <option value="Java">Java</option>
    <option value="JavaScript">JavaScript</option>
    <option value="Python">Python</option>
    <option value="Go">Go</option>
    <option value="C++">C++</option>
  </datalist>
```

![image-20211123001444728-165687347530741.b5464b55](/core-foundation/basic/html/assets/image-20211123001444728-165687347530741.b5464b55.png)

## 十二、表格

![image-20211123172639286-165687348817143.0d969898](/core-foundation/basic/html/assets/image-20211123172639286-165687348817143.0d969898.png)

### 1、HTML 表格标签

|标签	|描述|
|-----|----|
|`<table>`	|定义表格|
|`<th>`	|定义表格的表头|
|`<tr>`	|定义表格的行|
|`<td>`	|定义表格单元|
|`<caption>`	|定义表格标题（作为 table 的第一个子元素出现）|
|`<thead>`	|定义表格的页眉|
|`<tbody>`	|定义表格的主体|
|`<tfoot>`	|定义表格的页脚|

### 2、table 标签属性

|属性	|描述|
|-----|----|
|border	|表格的边框|
|width	|表格的宽度（HTML5 不支持）|
|cellpadding	|单元边沿与其内容之间的空白（HTML5 不支持）|
|cellspacing	|单元格之间的空白（HTML5 不支持|

> 注：在 HTML5 中 table 标签的大部分属性已经废弃，全部用 CSS 代替了

```html
  <h1>table标签</h1>

  <table border="1" width="500" cellpadding="10" cellspacing="0">
    <!-- caption标签，表格标题 -->
    <caption>
      同学通讯录
    </caption>
    <tr>
      <!-- th，表头 -->
      <th>姓名</th>
      <th>性别</th>
      <th>年龄</th>
      <th>所在城市</th>
    </tr>
    <tr>
      <td>arry</td>
      <td>男</td>
      <td>18</td>
      <td>北京</td>
    </tr>
    <tr>
      <td>豆豆</td>
      <td>女</td>
      <td>21</td>
      <td>上海</td>
    </tr>
    <tr>
      <td>翠花</td>
      <td>19</td>
      <td>男</td>
      <td>深圳</td>
    </tr>
  </table>
```

![image-20211123215826885-165687350528245.5c0889a5](/core-foundation/basic/html/assets/image-20211123215826885-165687350528245.5c0889a5.png)

### 3、table 标签跨行、跨列

td 标签 或 th标签的属性

|属性	|值	|描述|
|-----|----|----|
|colspan	|number	|规定单元格可横跨的列数|
|rowspan	|number	|设置单元格可纵跨的行数|

注：td 标签的其他属性在 HTML5 中已不支持，直接使用 css 即可

跨列

```html
  <h2>表格实战 - 跨列</h2>

  <table border="1" width="800">
    <caption>
      学生个人信息登记表
    </caption>
    <tr>
      <th colspan="8">高新一中初三一班学生信息登记表</th>
    </tr>
    <tr>
      <th colspan="8">学生基础信息</th>
    </tr>
    <tr>
      <td>姓名</td>
      <td>XXX</td>
      <td>国籍/地区</td>
      <td>中国</td>
      <td>姓名拼音</td>
      <td>XXX</td>
      <td>班内学号</td>
      <td>20211101</td>
    </tr>
    <tr>
      <td>性别</td>
      <td>女</td>
      <td>身份证件类型</td>
      <td>本地居民</td>
      <td>曾用名</td>
      <td>无</td>
      <td>班级</td>
      <td>初三（1）班</td>
    </tr>
    <tr>
      <td>出生日期</td>
      <td>2002年9月1日</td>
      <td>民族</td>
      <td>汉</td>
      <td>户口所在地</td>
      <td>北京</td>
      <td>入学年份</td>
      <td>2015年</td>
    </tr>
    <tr>
      <td>出生地</td>
      <td>北京</td>
      <td>政治面貌</td>
      <td>团员</td>
      <td>户口性质</td>
      <td>城镇户口</td>
      <td>入学方式</td>
      <td>普通入学</td>
    </tr>
    <tr>
      <td>籍贯</td>
      <td>海淀区</td>
      <td>健康状况</td>
      <td>良好</td>
      <td>特长</td>
      <td>书法</td>
      <td>就读方式</td>
      <td>走读</td>
    </tr>
    <tr>
      <td>身份证号</td>
      <td colspan="3"></td>
      <td>身份证有效期</td>
      <td colspan="3"></td>
    </tr>
    <tr>
      <th colspan="8">学生个人联系信息</th>
    </tr>
    <tr>
      <td>现住址</td>
      <td colspan="7"></td>
    </tr>
    <tr>
      <td>家庭地址</td>
      <td colspan="7"></td>
    </tr>
    <tr>
      <td>联系电话</td>
      <td colspan="7"></td>
    </tr>
    <tr>
      <td>电子信箱</td>
      <td colspan="7"></td>
    </tr>
  </table>
```
![image-20211123220132116-165687352104347.cc6d5593](/core-foundation/basic/html/assets/image-20211123220132116-165687352104347.cc6d5593.png)

跨行、跨列

```html
    <h2>表格实战 - 跨行跨列</h2>

    <table border="1" width="800">
      <caption>
        版本规划任务分配表
      </caption>
      <tr>
        <th colspan="2">需求：V0.3版本规划</th>
        <th>优先级</th>
        <th>任务分解</th>
        <th>产品负责人</th>
      </tr>
      <tr>
        <td rowspan="3">功能模块1</td>
        <td>具体事项1</td>
        <td>3</td>
        <td>任务1</td>
        <td rowspan="3">@翠花</td>
      </tr>
      <tr>
        <td rowspan="2">具体事项2</td>
        <td>4</td>
        <td>任务2</td>
      </tr>
      <tr>
        <td>1</td>
        <td>任务3</td>
      </tr>
      <tr>
        <td rowspan="6">功能模块2</td>
        <td>具体事项1</td>
        <td>2</td>
        <td>任务1</td>
        <td rowspan="6"></td>
      </tr>
      <tr>
        <td rowspan="4">具体事项2</td>
        <td>3</td>
        <td>任务1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>任务2</td>
      </tr>
      <tr>
        <td>1</td>
        <td>任务3</td>
      </tr>
      <tr>
        <td>4</td>
        <td>任务4</td>
      </tr>
      <tr>
        <td>具体事项3</td>
        <td>1</td>
        <td>任务1</td>
      </tr>
      <tr>
        <th colspan="5">备注信息</th>
      </tr>
      <tr>
        <td colspan="5">...</td>
      </tr>
    </table>
```

![image-20211123220227307-165687353660549.88056c1b](/core-foundation/basic/html/assets/image-20211123220227307-165687353660549.88056c1b.png)

### 4、thead，tbody，tfoot 标签

```html
    <h2>表格：thead、tbody、tfoot标签</h2>

    <table border="1" width="500">
      <thead>
        <caption>
          同学通讯录
        </caption>
        <tr>
          <th>专业</th>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th>所在城市</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>计算机</th>
          <td>arry</td>
          <td>男</td>
          <td>18</td>
          <td>北京</td>
        </tr>
        <tr>
          <th>外语</th>
          <td>豆豆</td>
          <td>女</td>
          <td>21</td>
          <td>上海</td>
        </tr>
        <tr>
          <th>市场营销</th>
          <td>翠花</td>
          <td>19</td>
          <td>男</td>
          <td>深圳</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <th>备注</th>
          <td colspan="4"></td>
        </tr>
      </tfoot>
    </table>
```

![image-20211123221724473-165687355222551.8d335914](/core-foundation/basic/html/assets/image-20211123221724473-165687355222551.8d335914.png)

