---
title: CSS 文本和字体属性、列表属性
icon: icon-css3
---

## 一、常用文本样式属性

|属性	|描述|
|-----|----|
|color英文单词表示法	|color: red;|
|color十六进制表示法	|color: #ff0000;|
|colorrgb() 表示法	|color: rgb(255,0,0);|
|color rgba() 表示法	|color: rgba(255,0,0,.35)|
|font-size字体大小	|font-size: 20px;|
|font-weight 字体粗细程度	|font-weight: bold;|
|font-style字体倾斜	|font-style: italic;|
|text-decoration文本修饰线	|text-decoration:none;|

### 1、color 属性

::: tip
 
- color 属性可设置文本内容的字体颜色
- color 属性主要可以用 英语单词、十六进制、rgb()、rgba() 等表示法

 注：英语单词表示法，如：color:red;仅用于学习或测试使用，工作中基本不用这样的形式，需要精准
 
 ```css
   color: red;
   color: skyblue;
 ```
:::

### 2、color 属性 - 十六进制表示法

::: tip

- 十六进制表示法是所有设计软件中都通过的颜色表示法
- 设计师会给我们在设计图上标注的颜色，通常为十六进制表示
 
 ```html
   /* 
     ff: 最小值是00 ，最大值是ff
     光学显示器三原色：红绿蓝 
     我们日常画画时是：红黄蓝
   */
   color: #ff0000;
 ```
 
- 如：十六进制 ff 就是十进制的 255，每种颜色分量都是 0~255 的数字
- 如果颜色值是两两相同，并且能有三对，#aabbcc 的形式，可以简写为 #abc
 
 ```css
   color:#cc0066      可以简写成       color:#c06;
   color:#ff43dd       不能写成        color:f43d;
 ```
 :::
 **常用的十六进制表示法**
 
 |色值	|描述|
 |-----|---|
 |#000	|黑色|
 |#fff	|白色|
 |#ccc 、#333 、#2f2f2f、#666、#ddd	|灰色|


### 3、color 属性 - rgb() 表示法
::: tip

- rgb 中三个数字的范围是 0-255 之间
- rgb 是光学显示器三原色：红（red ）、绿（green）、 蓝（blue） 三个单词的缩写
 
 ```css
   /*
     rgb()三个值分别表示：红色,绿色,蓝色
     最小值：0 
     最大值：255 （红色）
   */
   color: rgb(255, 0, 0);
 
   /* 白色 */
   color: rgb(255, 255, 255);
 
   /* 黑色 */
   color: rgb(0, 0, 0);
 ```
:::

### 4、color 属性 - rgba() 表示法

::: tip
 
- 颜色也可以用 rgba() 表示法，rgba 中前三个数字的范围是 0-255 之间，表示的是颜色
- 最后一个参数表示颜色透明度介于 0 到 1 之间
- 0 表示纯透明，1 表示纯实心（不透明），从 0-1 值越大，透明度越低
- rgba() 表示法从 IE9 开始兼容
 
 ```css
   color: rgba(255, 0, 0, 0.35);
 ```
:::


### 5、font-size 属性，字体大小

::: tip
 
- font-size 属性用来设置文字的字体字号大小，单位通常为 px（像素）、%百分比
- 移动端还会学习 em、rem、vw、vh 单位
 
 **px（像素）单位**
 
 ```css
   font-size: 20px; /* 字体大小 20px */
 ```
 
- 网页文字正文字号通常是 16px
- 浏览器最小支持 12px 字号，也就是你设置的字体小于 12px，默认都会以 12px 大小显示
- **面试题：**如何在页面显示小于 12px 的字体？（学到动画会讲）
 
 **%（百分比）单位**
 
 百分比相对于父元素的 font-size 大小而言
 
 ```html
   <style>
     p {
       font-size: 20px; /*字体大小*/
     }
     p span {
       font-size: 200%; /*相当于 40px*/
     }
   </style>
   <body>
     <p><span>字体</span>大小以百分比为单位，相对的是父元素font-size大小</p>
   </body>
 ```
:::

### 6、font-weight 属性

::: tip

- font-weight 属性设置字体的粗细程度
- 通常用 normal 和 bold 两个值，或其对应数字 400 与 700 来表示
 
 |属性	|描述|
 |-----|----|
 |normal	|正常粗细，与 400 等值|
 |bold	|加粗，与 700 等值|
 |lighter	|更细，大多数中文字体不支持。比从父元素继承来的值更细 （处在字体可行的粗细值范围内）|
 |bolder	|更粗，大多数中文字体不支持。比从父元素继承来的值更粗（处在字体可行的粗细值范围内）|
 
 ```css
   /* 正常粗细 与400等值 */
   font-weight: normal;
   /* 加粗，与700等值 */
   font-weight: bold;
 ```
 
 **当我们使用`数字`来表示粗细时**
 
- 数字大小介于 1-1000（包含）之间，更大的数字比更小的数字表示的字体要相对粗些
- 最终的粗细要在当前字体可行的精细范围之内
 
 ```html
   <style>
     div {
       font-weight: 400; /*正常粗细*/
     }
     div span {
       font-weight: lighter;
     }
     div .bold {
       font-weight: bold;
     }
   </style>
   <body>
     <div>
       <span class="bold">我是加粗过的</span> 我正常粗细，<span
         >我比父级字体细？</span
       >
     </div>
   </body>
 ```
:::


### 7、font-style 属性

::: tip
 
- font-style 属性设置字体的倾斜
 
 |属性	|描述|
 |-----|----|
 |`normal`	|取消倾斜，如：把天生倾斜的 i、em 等标签设置为 不倾斜|
 |`italic`	|设置为倾斜字体（常用）如果当前字体没有可用的斜体版本，会选用（oblique ）替代|
 |`oblique`	|设置为倾斜字体（用常规字体模拟，不常用）|
 
 ```html
   <style>
     p i {
       font-style: normal; /*取消倾斜*/
     }
     .line1 {
       font-style: italic; /*倾斜字体*/
     }
     .line2 {
       font-style: oblique; /*倾斜字体*/
     }
   </style>
   <body>
     <p><i>我是normal下修正过来的,不倾斜</i></p>
     <p class="line1">我是italic下的倾斜</p>
     <p class="line2">我是oblique下的倾斜</p>
   </body>
 ```
:::

### 8、@font-face 自定义字体

::: info

 **设置用户电脑中没有的字体**
 
 `@font-face` 可以消除对用户电脑字体的依赖，如果用户电脑中没有我们想要的字体，那用户在浏览网页时就会下载相关字体，然后> 显示字体效果。
 
 **定义字体前准备工作**
 
- 必须自己定义新的字体 （需要有字体文件）
- 用户加载网页时，会同时下载这些字体文件
- 字体文件根据操作系统和浏览器不同，有 eot、woff2、woff、ttf、svg 文件格式，需要同时有这 5 种文件
 
 **如何定义字体**
 
 ```css
   @font-face {
     font-family: ; /*字体类型*/
     src: url(); /*引入字体文件*/
   }
 ```
 
- 当我们拥有字体文件后，就可以用 @font-face 定义字体
- 字体有很多是有版权的不能随便商业使用
- 建议使用阿里巴巴普惠体，可免费商用的字体
- 阿里巴巴普惠体：https://www.iconfont.cn/webfont(opens new window)
- 使用阿里巴巴普惠字体，可以下载，也可以在线使用，也省去了下载字体的麻烦
- 实际应用场景：指定特定文字设置样式，比如：标题 ...
:::

**使用阿里巴巴普惠字体步骤**

① 点击网址[https://www.iconfont.cn/webfont](https://www.iconfont.cn/webfont) 进入

![image-20220705221154007.eaec028e](/core-foundation/basic/css/assets/image-20220705221154007.eaec028e.png)

② 解压下载好的字体包，然后点击 demo.html，按文件中的以下三步来使用字体

![image-20220705221500015.004c79b4](/core-foundation/basic/css/assets/image-20220705221500015.004c79b4.png)

**第一步：使用 font-face 声明字体**

> 这里要注意，引入字体的地址，如果导入文件和字体不在同一目录下，需要修改地址

```css
  @font-face {
    font-family: "webfont";
    font-display: swap;
    src: url("webfont.eot"); /* IE9 */
    src: url("webfont.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
        url("webfont.woff2") format("woff2"), url("webfont.woff") format("woff"), /* chrome、firefox */
        url("webfont.ttf") format("truetype"),
      /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
        url("webfont.svg#webfont") format("svg"); /* iOS 4.1- */
  }
```

**第二步：定义使用 webfont 的样式**

```css
  .web-font {
    font-family: "webfont" !important;
    font-size: 26px;
    color: red;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
```

**第三步：为文字加上对应的样式**

```css
  <p class="web-font">艾编程- 为每个互联网人提供高质量的终身学习平台</p>
  <p></p>
```

查看字体效果：

![image-20220705222200384.ab6e97f7](/core-foundation/basic/css/assets/image-20220705222200384.ab6e97f7.png)

## 二、CSS 文本属性

::: tip 包含内容
 
 修饰线，首行缩进，行高，font 属性复合写法，内容水平居中，字间距，字符间距
:::

### 1、text-decoration 属性 - 修饰线

::: tip 修饰线
 
- 用于设置文本的修饰线外观的（下划线、上划线、贯穿线/删除线 或 闪烁）
- 常用的属性值有以下三种
 
 |属性	|描述|
 |-----|----|
 |`none`	|没有修饰线|
 |`underline`	|下划线|
 |`line-through`	|删除线|
::: 

```html
  <style>
    a {
      /* 去掉下划线 */
      text-decoration: none;
    }
    p {
      /* 下划线 */
      text-decoration: underline;
    }
    div {
      /* 删除线 */
      text-decoration: line-through;
    }
  </style>
  <body>
    <a href="#">艾编程</a>
    <p>为每个互联网人提供高质量的终身学习平台</p>
    <div>删除线</div>
  </body>
```

![image-20220705223416158.b6104ab8](/core-foundation/basic/css/assets/image-20220705223416158.b6104ab8.png)

::: note 扩展延伸：
 
 `text-decoration` 它是以下四个属性的简写
 
 `text-decoration-line` ：文本修饰的位置，如下划线`underline`，删除线`line-through`
 `text-decoration-color`：文本修饰的颜色
 `text-decoration-style`：文本修饰的样式，如波浪线wavy实线`solid`虚线`dashed`
 `text-decoration-thickness`：文本修饰线的粗细
 
 ```html
   <style>
     .wavy {
       text-decoration: wavy underline red 5px; /*波浪线  下划线  红色 粗细*/
     }
   </style>
   <body>
     <div class="wavy">艾编程-为每个互联网人提供高质量的终身学习平台</div>
   </body>
 ```
 
 ![image-20220705224218275.2765c3d2](/core-foundation/basic/css/assets/image-20220705224218275.2765c3d2.png)
:::

### 2、text-indent 属性 - 首行缩进

::: tip 首行缩进
 
- text-indent 属性定义首行文本内容之前的缩进量
- 比如：中文一般文章书写都会 缩进两个字符
- 常用单位是em，1em是一个字符的宽度,2em表示 2 个字符的宽度
 
 ```html
   <style>
     p {
       font-size: 20px;
     }
     p span {
       font-size: 2em; /*相当于 40px*/
     }
     .line2 {
       text-indent: 2em; /*P首行缩进为2个字符大小*/
     }
   </style>
   <body>
     <p class="line1">
       艾编程，为每个互联网人提供 <span>高质量</span>的终身学习平台
     </p>
     <p class="line2">
       艾编程是在大数据人工智能时代高速发展的今天成立的一家以提供各行业商业项目研发解决方案为核心的在线教育学习平台。
     </p>
   </body>
 ```
 
 ![image-20220712120323107.20d4176d](/core-foundation/basic/css/assets/image-20220712120323107.20d4176d.png)
:::

### 3、line-height 属性 - 行高

::: tip
 **行高**
 
- line-height 属性定义行高
- 如何测量行高，有很多种方式，比如：从一行文字的最顶部到下一行文字的最顶部之间的距离，就是行高。具体测量方式可以看下图
 
 ![image-20211126231413734.45966ec4](/core-foundation/basic/css/assets/image-20211126231413734.45966ec4.png)
 
 **关于行高的最佳实践：**
 
- ①② 是行高测量上的定义，③ 是行高的真实定义
- line-height 属性的单位可以是 px 为单位的数值
- line-height 属性也可以是没有单位的数值，表示字号的倍数，这是最推荐的写法
- 实际工作中行高：1.25 , 1.5 , 1.75 都是常用的倍数设置
- line-height 属性也可以是百分数，表示字号的倍数
:::

**line-height 行高值的 4 种写法**

|单位	|实例	|说明|
|-----|-----|---
|px	|line-height:30px;	|行高为 30px|
|数值表示法	|line-height:2;	|行高为 font-size 的倍数，如果font-size:20px;则line-height:2;表示行高为 40px|
|百分比表示法	|line-height:200%;	|行高为 font-size 的百分比，如果font-size:20px，则line-height:40px;|
|normal	|line-height:normal;	|取决于用户端。桌面浏览器（包括 Firefox）使用默认值，约为1.2，这取决于元素的 font-family。|

```html
  <style>
    div {
      border: 1px solid red; /*边框线:1像素 实线  红色*/
      font-size: 20px; /*字体大小*/
    }
    .line1 {
      line-height: 30px; /*行高为30px*/
    }
    .line2 {
      line-height: 2; /*行高为字体2倍*/
    }
    .line3 {
      line-height: 200%; /*行高为字体2倍*/
    }
  </style>
  <body>
    <div class="line1">行高为30px</div>
    <div class="line2">行高为数值2</div>
    <div class="line3">行高为200%</div>
  </body>
```

::: warning
 
- 推荐在设置 line-height 时使用无单位数值
- 主段落内容的 line-height 至少应为 1.5
- 如果文字的大小要随页面的缩放而变化，请使用无单位的值，以确保行高也会等比例缩放。
:::

### 4、行文本垂直、水平居中

::: info
 **① 行文本垂直居中**
 
- 设置 **行高 = 盒子高度**，即可实现单行文本垂直居中
 ```html
   /* 行高 = 盒子高度，即 文本垂直居中 */
   line-height: 盒子高度;
 ```
 **② text-align 属性**
 
- 定义 **行内内容（例如文字、图片、行内块级元素）** 相对它的块父元素的对齐方式
 
 **常用的三个属性值：**
 
- left 水平居左
- right 水平居右
- center 水平居中
 
 ```html
   <style>
     div.left {
       text-align: left;
     }
     div.center {
       /* 文本居中对齐 */
       text-align: center;
     }
     div.right {
       text-align: right;
     }
   </style>
   <body>
     <div class="left">左边</div>
     <div class="center">中间</div>
     <div class="right">右边</div>
   </body>
 ```
 ![line-height](/core-foundation/basic/css/assets/line-height.png)
:::

### 5、font 合写属性 - 复合写法

::: tip
 
- font 属性可以用来作为 font-style，font-weight ，font-size ，line-height 和 font-family 属性的合写
 
 ```css
   /* 
       20px 表示字体大小
       1.5 表示行高
       Arial, "微软雅黑" 表示字体（英文写前边，中文写后边）
     */
     font: 20px/1.5 Arial, "微软雅黑";
 ```
 
 如果同时还需要 倾斜和加粗 （大大的减少代码量）
 
 ```css
   /* 
     italic 倾斜
     bold 加粗
   */
   font: italic bold 20px/1.5 Arial, "微软雅黑";
 ```
 
 应用场景：（小米，京东 等等 一线互联网企业都这么用）
 
 ```html
   <style>
     p {
       font: italic bold 30px/1.5 "Times New Roman", "微软雅黑";
     }
   </style>
 
   <body>
     <h1>font 合写属性</h1>
 
     <p>icodingedu , 艾编程企业精神</p>
     <p>付出不亚于任何人的努力</p>
     <p>谦虚戒骄</p>
     <p>天天反省</p>
     <p>活着就要感谢</p>
     <p>积善行、思利他</p>
     <p>不要有感性的烦恼</p>
   </body>
 ```
:::

::: warning font 属性连写注意事项
 
- font 属性连写时，必须设置 font-size 和 font-family 才能生效
- 连写时，行高问题
 
 ```html
   <style>
     p {
       /* 此行高不生效，因为font连写时，30px/行高 ，这里默认有行高了 */
       /* line-height: 40px; */
       font: bold 30px "宋体";
       /* line-height 写在 font 下边，即可生效，此时 是覆盖了font默认的行高 */
       line-height: 50px;
     }
   </style>
 ```
 
- font 属性连写时，必须设置 font-size 和 font-family 才能生效
 
 ```css
   font: bold 30px; /* 这种写法是错的，不会生效 */
 ```
 
- `font-style`和`font-weight` 必须在 `font-size` 之前
 
 ```css
   /* 正确写法 */
   font: bold italic 20px/1.5 "宋体";
   font: 20px/1.5 "宋体";
 
   /* 错误写法 */
   font: italic 20px/1.5 bold;
   font: 20px/1.5 bold "宋体";
 ```
:::

### 6、继承性

**TIP**

关于文字属性的继承性和就近原则

① **祖先元素设置**，后代元素即生效

- 文本相关的属性普遍具有继承性，只需要给 **祖先标签** 设置，即可在后代所有标签中生效

```html
  color
  font-开头的属性
  list-开头的属性
  text-开头的属性
  line-开头的属性
```
- 因为文字相关属性有继承性，所以通常会设置 `<body>`标签的字号、颜色、行高等，这样就能当做整个网页的默认样式了

```html
  <style>
    .box {
      font-size: 20px;
      line-height: 1.5;
      font-weight: bold;
      font-family: "宋体";
      text-align: center;
      text-decoration: underline;
      font-style: italic;
      color: skyblue;
    }
  </style>

  <body>
    <h1>继承性</h1>

    <div class="box">
      <ul>
        <li>我是列表项</li>
        <li>我是列表项</li>
        <li>我是列表项</li>
        <li>我是列表项</li>
        <li>我是列表项</li>
      </ul>
    </div>
  </body>
```

![image-20211127000019693.46547df3](/core-foundation/basic/css/assets/image-20211127000019693.46547df3.png)

**② 就近原则**

- 在继承的情况下，选择器权重计算失效，而不是就近原则

```html
  <style>
    /* （3,0,0） 注意：继承的选择器，权重可以看做是0，权重绝对没有选中的大*/
    #box1 #box2 #box3 {
      color: red;
    }

    /* （0,0,1）p标签是直接选中，权重最高，因此跟继承没关系 */
    p {
      color: skyblue;
    }
  </style>

  <body>
    <h2>在继承的情况下，选择器权重计算失效，而不是就近原则</h2>

    <div class="box1" id="box1">
      <div class="box2" id="box2">
        <div class="box3" id="box3">
          <p>我是段落标签</p>
        </div>
      </div>
    </div>
  </body>
```

- 在继承的情况下，选择器权重计算失效，而是就近原则

```html
  <style>
    /* 就近原则，谁描述的近，听谁的 */
    #box1 #box2 {
      color: red;
    }

    /* .box3描述距离p标签更近，所以，当前生效 */
    .box1 .box3 {
      color: green;
    }
  </style>

  <body>
    <h2>在继承的情况下，选择器权重计算失效，而是就近原则</h2>

    <div class="box1" id="box1">
      <div class="box2" id="box2">
        <div class="box3" id="box3">
          <p>我是段落标签</p>
        </div>
      </div>
    </div>
  </body> 
```

### 6、word-spacing 字间距

::: tip
 
 word-spacing 表示字间距，对中文是无效的，仅对英文字单词起作用
 
 |属性值	|描述|
 |-------|-----|
 |normal	|正常的单词间距，由当前字体和/或浏览器定义。|
 |长度	|通过指定具体的额外间距来增加字体的单词间距|
 
 ```html
   <style> 
     .f1 {
       word-spacing: 50px; /*英文单词间间距*/
     }
   </style>
   <body>
     <h3 class="f1">注意观察，汉字与英文之间的显示区别</h3>
     <h3 class="f1">display is different</h3>
   </body>
 ```
 ![image-20220705235229227.7f7fdad2](/core-foundation/basic/css/assets/image-20220705235229227.7f7fdad2.png)
:::

### 7、letter-spacing 字符间距

::: tip

 `letter-spacing` 属性用于设置文本字符的间距表现。
 
 |属性值	|描述|
 |normal	|此间距是按照当前字体的正常间距确定的|
 |长度	|指定文字间的间距以替代默认间距。可以是负值 如-10px|
 
 ```html
   <style>
     .f1 {
       letter-spacing: 30px; /*字简距*/
     }
   </style>
   <body>
     <h3 class="f1">注意观察，汉字与英文之间的显示区别</h3>
     <h3 class="f1">display is different</h3>
   </body>
 ```
 ![image-20220705235400370.7cecc5f6](/core-foundation/basic/css/assets/image-20220705235400370.7cecc5f6.png)
:::

## 三、列表样式

### 1、list-style-type

list-style-type 属性设置列表项标记的类型

|值	|描述|
|----|----|
|none	|无标记。|
|disc	|默认。标记是实心圆。|
|circle	|标记是空心圆。|
|square	|标记是实心方块。|
|decimal	|标记是数字。|
|decimal-leading-zero	|0 开头的数字标记。(01, 02, 03, 等。)|
|lower-alpha	|小写英文字母 The marker is lower-alpha (a, b, c, d, e, 等。)|
|upper-alpha	|大写英文字母 The marker is upper-alpha (A, B, C, D, E, 等。)|

::: tip 最佳实践：
 
- 标记的类型多在 20 多项，以上只列出了部分，但实际开发中几乎不用。
- 在实际开发中，一般会把前面的标记类型去掉
- 如果需要相关标记类型，用做好的小图标来代替
- 所以我们只需要掌握如何去掉标记就好，去掉标记代码 list-style-type:none;
 
 ```html
   <style type="text/css">
     ul {
       list-style-type: none; /*去掉标记*/
     }
   </style>
   <body>
     <ul>
       <li>前端</li>
       <li>java</li>
       <li>大数据</li>
     </ul>
   </body>
 ```
:::

### 2、list-style-image

::: tip

用来指定列表中的列表标记图像，几乎不用，了解就好

|值	|描述|
|----|---|
|URL	|图像的路径。|
|none	|默认。无图形被显示。|
|inherit	|规定应该从父元素继承 list-style-image 属性的值。|

```css
  ul li {
    /* 去掉默认小黑圆点 */
    list-style-type: none;
    list-style-image: url(images/dot.png);
  }
```
:::

### 3、list-style-position

**TIP**

规定列表中列表项目标记的位置 ，几乎不用，了解就好

|值	|描述|
|----|----|
|inside	|列表项目标记放置在文本以内，且环绕文本根据标记对齐。|
|outside	|默认值。保持标记位于文本的左侧。列表项目标记放置在文本以外，且环绕文本不根据标记对齐。|
|inherit	|规定应该从父元素继承 list-style-position 属性的值。|

```css
  ul li {
    border: 1px solid red; /*边框线*/
    list-style-type: none; /*去掉圆点*/
    list-style-position: outside; /*圆点位置*/
    list-style-image: url(images/dot.png); /*圆点图标*/
  }
```

|outside 效果	|inside 效果|
|--------------|-----------|
|![outside](/core-foundation/basic/css/assets/outside.png)|![inside](/core-foundation/basic/css/assets/inside.png)|


### 4、list-style

::: tip

- list-style 是 list-style-type 、 list-type-position 、list-style-image 的三个的综合写法。
- 但在实际开发中，用的最多的是 list-style:none; 和 list-style-type:none用来去掉标记。
:::

## 四、应用实践

::: tip

- 将所学 CSS 文本样式属性用于实践
::: 

### 1、单行文本水平垂直居中

```html
  <style>
    .box {
      width: 200px; /*宽 200px*/
      height: 50px; /*宽 50px*/
      border: 1px solid red; /*边框线：1像素  实线 红色;*/
      text-align: center; /*文字水平居中*/
      line-height: 50px; /*文字垂直居中*/
    }
  </style>
  <body>
    <div class="box">单行文本水平垂直居中</div>
  </body>
```

![line-height1](/core-foundation/basic/css/assets/line-height1.png)

### 2、设置中英文混合间距

把 `word-spacing` 与 `letter-spacing` 两者结合使用  

```html
  <style>
    h3 {
      word-spacing: 20px; /*英文单词间距*/
    }
    h3 span {
      letter-spacing: 20px; /*span标签中汉字间距*/
    }
  </style>
  <body>
    <h3>I love you<span>&nbsp;我的宝贝！</span></h3>
  </body>
```

![babel](/core-foundation/basic/css/assets/babel.png)

### 3、新闻排版

效果图如下：

![image-20220712173453394.fa95fdcc](/core-foundation/basic/css/assets/image-20220712173453394.fa95fdcc.png)

```html
  <style>
    h1 {
      font-size: 30px;
      text-align: center;
    }
    .desc {
      text-align: center;
      font-size: 14px;
      color: #666;
    }
    .desc span {
      color: red;
      background-color: #ddd;
    }
    .desc a {
      text-decoration: none;
      color: red;
    }
    p {
      text-indent: 2em;
      line-height: 2;
    }
    .img {
      text-indent: 0;
      text-align: center;
    }
  </style>
  <body>
    <h1>首个国产新冠特效药上市后首批抵深</h1>
    <p class="desc">
      <span>原创</span> 2022-07-12 09:57 · <a href="">南方日报</a>
    </p>
    <p>
      7月11日,新冠中和抗体安巴韦单抗和罗米司韦单抗联合疗法药品运抵深圳市第三人民医院
    </p>
    <p class="img"><img src="images/pic.jpg" alt="" /></p>
    <p>
      南方日报讯
      （记者/黄思华）7月11日，新冠中和抗体安巴韦单抗和罗米司韦单抗联合疗法药品交接仪式在深圳市第三人民医院举行。这是国产新冠特效药商业化上市后向市场供应的首批药物，共计100人份，每1人份的联合疗法是由安巴韦单抗1000毫克和罗米司韦单抗1000毫克组成，
      全程在2—8℃冷链环境下储存。
    </p>
    <p>南方日报记者 朱洪波 摄</p>
  </body>
```