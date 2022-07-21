---
title: Markdown 基本语法（初级）
icon: info
category: Markdown
article: false
tag:
  - Markdown
---

## 一、什么是 Markdown

> Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档，将格式元素添加到纯文本文档
> Markdown 允许您使用易于阅读、易于编写的纯文本格式进行编写，然后将其转换为结构上有效的 XHTML（或 HTML）
> Markdown 是由约翰·格鲁伯（John Gruber）于 2004 年创建，现在是世界上最受欢迎的标记语言之一
> Markdown 编写的文档可以导出 HTML、word、图像、PDF、Epub 等多种格式的文档
>
> Markdown 编写的文档后缀为 `.md`、`.Markdown`
>
> 你可以使用文本编辑器应用程序将 Markdown 格式元素添加到纯文本文件中。活着，您可以使用 macOS、Windows、Linux、iOS 和安卓操作系统的众多 Markdown 应用程序之一。还有一些基于 web 的应用程序专门设计用于以 Markdown 方式编写

## 二、为什么要用 Markdown ?

> - Markdown 是可移植的。包含 Markdown 格式文本的文件几乎可以使用任何应用程序打开。如果您决定不喜欢当前使用的 Markdown y 应用程序，可以将 Markdown 文件导入另一个 Markdown 应用程序。这与 Microsoft Word 等文字处理应用程序形成鲜明对比，后者将您的内容锁定为专有文件格式.
> - Markdown 与平台无关。您可以再运行任何操作系统的任何设备上创建 Markdown 格式的文本.
> - Markdown 无处不在： Reddit 和 GitHub 等网站支持 Markdown，许多桌面和基于 web 的应用程序都支持 Markdown.
>
> **Markdown 可以用于任何事情，通过简单的标记语法，它可以使普通内容具有一定的格式**
>
> - 整理知识，学习必记
> - 发布日记，杂文，所见所想
> - 撰写发布技术文稿（代码支持）
> - 撰写发布学术论文（LaTeX 公式支持）
> - 使用它创建网站、文档、书籍、演示、电子邮件和技术文档
> - Markdown 能被使用来撰写带你字数，如：Gitbook
> - 当前许多网站都广泛使用 Markdown 来撰写帮助文档或是用于论坛上发表消息。列如：GigHub、Gitee、GitLab 简书、掘金、reddit、Diaspora、Stack Exchange、OpenStreeMap、SourceForge 等

## 三、支持 Markdown 的应用程序和组件，工具

> 支持 Markdown 的工具有很多，链接地址：[Markdown 工具地址](https://www.markdownguide.org/tools/)

## 四、Markdown 基本语法

> 几乎所有 Markdown 应用程序都支持原始 Markdown 设计文档中概述的基本语法
>
> Markdown 处理器之间存在微小的区别和差异

### 标题

> 要创建标题，请在单词或短语前添加数字符号 `（#）`，您使用的数字符号的数量应与标题几倍相对应。
>
> 列入，要创建标题级别三（`<h3>`）,请使用三个字符符号（列如 `### My Header`）

| Markdown                 | HTML                       | 渲染输出            |
| ------------------------ | -------------------------- | ------------------- |
| `# Heading level 1`      | `<h1>Heading level 1</h1>` | **Heading level 1** |
| `## Heading level 2`     | `<h2>Heading level 2</h2>` | **Heading level 2** |
| `### Heading level 3`    | `<h3>Heading level 3</h3>` | **Heading level 3** |
| `#### Heading level 4`   | `<h4>Heading level 4</h4>` | **Heading level 4** |
| `##### Heading level 5`  | `<h5>Heading level 5</h5>` | **Heading level 5** |
| `###### Heading level 6` | `<h6>Heading level 6</h6>` | **Heading level 6** |

### 段落

> 要创建段落，请使用空行分隔一行或多行文本。
> 段落中添加 `<br>`可以换行。

| Markdown                                                                                      | HTML                                                                                                        | 渲染输出                                                                |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `I really like using Markdown.I think I'll use it to format all of my documents from now on.` | `<p>I really like using Markdown.</p><p>I think I'll use it to format all of my documents from now on.</p>` | 我真的很喜欢使用 Markdown。我想从现在开始我会用它来格式化我的所有文档。 |

### 换行符

> 要创建换行符或换行符（`<br>`）,请以两个或多个空格结束一行，然后键入 return。

| Markdown                                                  | HTML                                                             | 渲染输出                 |
| --------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------ |
| `This is the first line.<br>And this is the second line.` | `<p>This is the first line.<br>And this is the second line.</p>` | 这是第一行。这是第二行。 |

### **强调（加粗）**

> 您可以通过将文本设置为粗体或斜体来增加重点。
>
> 要加粗文本，请在单词或短语前后添加 `两个星号`或下 `划线`。为了强调单词的中间部分，请在字母周围添加两个 `不带空格`的星号。

| Markdown                     | HTML                                      | 渲染输出               |
| ---------------------------- | ----------------------------------------- | ---------------------- |
| I just love `**bold text**`. | I just love `<strong>bold text</strong>`. | 我只是喜欢**粗体字。** |
| I just love `__bold text__`. | I just love `<strong>bold text</strong>`. | 我只是喜欢**粗体字。** |
| Love `**is**`bold            | Love `<strong>is</strong>`bold.           | 爱**是**大胆的         |

### 斜体

> 要是文本变为斜体，请在单词或短语前后添加 `一个星号`或 `下滑线`
> 为了强调单词中间的斜体，请在字母周围添加一个 `不带空格`的星号

```markdown
我是*斜体*字
```

渲染的输出如下所示
我是*斜体*字

### 块引用

> 要创建块引用，请 `>`在段落前添加一个。

```markdown
> 我是一个块引用
```

渲染的输出如下所示：

> 我是一个块引用

#### 带有多个段落的块引用

> 块引用可以包含多个段落。`>`在段落之间的空白行上添加一个。

```markdown
> 我是第一个块引用
>
> 我是多个段落的块引用
```

渲染的输出如下显示：

> 我是第一个块引用
>
> 我是多个段落的块引用

#### 嵌套块引用

> 块引用可以嵌套。>>在要嵌套的段落前面添加一个。

```markdown
> 我是外层块引用
>
> > 我是内层块引用
```

渲染的输出如下所示

> 我是外层块引用
>
> > 我是内层块引用

#### 带有其他元素的块引用

> 块引用可以包含其他 Markdown 格式的元素。

```markdown
> #### 我这是四级标题的块引用
>
> - 列表的块引用
> - 列表的块引用
>
> 我是*斜体*和**加粗**的块引用
```

渲染的输出如下所示

> #### 我这是四级标题的块引用
>
> - 列表的块引用
> - 列表的块引用
>
> 我是*斜体*和**加粗**的块引用

### 列表

> 您可以将项目组织成有序列表和无序列表。

#### 有序列表

> 要创建有序列表，请添加带有 `数字后跟句点`的行项目。数字不必按数字顺序排列，但列表应以 `数字一开头`。

| Markdown                                                                   | HTML                                                                                                        | 渲染输出                                               |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 1.&nbsp;第一项`<br>`2.&nbsp;第二项`<br>`3.&nbsp;第三项`<br>`4.&nbsp;第四项 | ` <ol><br>``<li>第一项</li><br>``<li>第二项</li><br> ` `<li>第三项</li><br>` ` <li>第四项</li><br>``</ol> ` | 1. 第一项`<br>`2. 第二项`<br>`3. 第三项`<br>`4. 第四项 |

渲染的输出如下所示

1. 第一项
2. 第二项
3. 第三项
4. 第四项

#### 无序列表

> 要创建无序列表，请在行项目前添加破折号 ( `-`)、星号 ( `*`) 或加号 ( `+`)。·缩进一项或多项·以创建 `嵌套列表`。

| Markdown                                                               | HTML                                                                                                    | 渲染输出                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| -&nbsp;第一项`<br>`-&nbsp;第二项`<br>`-&nbsp;第三项`<br>`-&nbsp;第四项 | ` <ul><br>``<li>第一项</li><br>``<li>第二项</li><br>``<li>第三项</li><br>``<li>第四项</li><br>``</ul> ` | 第一项`<br>`第二项`<br>`第三项`<br>`第四项 |

渲染的输出如下所示

- 第一项
- 第二项
- 第三项
- 第四项

#### 在列表中添加元素

```markdown
- 第一项
- 第二项
- 第三项
  > w 我是无序列表中的块引用
- 第四项
```

渲染的输出如下所示

- 第一项
- 第二项
- 第三项
  > w 我是无序列表中的块引用
- 第四项

## 代码

> 要将单词或短语表示为代码，请将其括在反引号 **( `)** 中。

| Markdown                     | HTML                                               | 渲染输出                   |
| ---------------------------- | -------------------------------------------------- | -------------------------- |
| 在命令提示符处，键入 `nano`. | 在命令提示符处，键入**`<code>`**nano**`</code>`**. | 在命令提示符处，键入 nano. |

### 代码块

> 要创建代码块，请将块的每一行缩进至少四个空格或一个制表符。|

```markdown
    <html>
      <head>
      </head>
    </html>
```

渲染的输出如下所示

`

<html>
  <head>
  </head>
</html>
`

## 链接

> 要创建链接，请将链接文本括在括号中（例如，`[Duck Duck Go]`），然后紧跟在括号中的 URL（例如，`(https://duckduckgo.com)`）。

```markdown
我最喜欢的搜索引擎是[Duck Duck Go](https://duckduckgo.com)。
```

渲染的输出如下所示

我最喜欢的搜索引擎是[Duck Duck Go](https://duckduckgo.com)。

### 添加标题

```markdown
我最喜欢的搜索引擎是[Duck Duck Go](https://duckduckgo.com "我是描述性文字")。
```

渲染的输出如下所示

我最喜欢的搜索引擎是[Duck Duck Go](https://duckduckgo.com "我是描述性文字")。

### URL 和电子邮件地址

> 要将 URL 或电子邮件地址快速转换为链接，请将其括在 `尖括号中<>`。

```markdown
<https://www.markdownguide.org>
<fake@example.com>
```

渲染的输出如下所示

[https://www.markdownguide.org](https://www.markdownguide.org)
<fake@example.com>

### 格式化链接

> 要**强调**链接，请在 `方括号和圆括号前后添加星号`。要将链接表示为**code**，请在括号中添加 `反引号`。

```markdown
我喜欢支持**[EFF](https://eff.org)**。
这是*[Markdown](https://www.markdownguide.org/basic-syntax/#adding-titles)*。
请参阅关于的部分[`code`](#code)。
```

渲染的输出如下所示

我喜欢支持**[EFF](https://eff.org)**。
这是*[Markdown](https://www.markdownguide.org/basic-syntax/#adding-titles)*。
请参阅关于的部分[`code`](#code)。

## 图片

> 要添加图像，请添加感叹号 (`!`)，后跟 `括号中的替代文本`，以及括号中的图像资源的 `路径或 URL`。您可以选择在路径或 URL 后添加 `引号中的标题`。

```markdown
![文中添加图片](assets/image-20220714202411426.png "我是标题")
```

渲染的输出如下所示

![文中添加图片](assets/image-20220714202411426.png "我是标题")

### 链接图像

> 要添加指向图像的链接，请将图像的 Markdown 括在括号中，然后将链接添加到括号中。

```markdown
[![image-20220714202922210](assets/image-20220714202922210.png "按住ctrl+左键跳转百度")](http://baidu.com)
```

[![image-20220714202922210](assets/image-20220714202922210.png "按住ctrl+左键跳转百度")](http://baidu.com)

## 转义字符

> 要显示原本用于在 Markdown 文档中格式化文本的文字字符，请在字符前面添加反斜杠 (`\`)。

```markdown
\* 演示转义符文字\*
```

渲染的输出如下所示

\* 演示转义符文字\*

## HTML

> 许多 Markdown 应用程序允许您在 Markdown 格式的文本中使用 HTML 标签。如果您更喜欢某些 HTML 标记而不是 Markdown 语法，这将很有帮助。例如，有些人发现对图像使用 HTML 标记更容易。当您需要更改元素的属性（例如指定文本的颜色或更改图像的宽度）时，使用 HTML 也很有帮助。

> 要使用 HTML，请将标签放在 Markdown 格式文件的文本中。

```markdown
我是**粗体**. 我是<em>斜体</em>
```

渲染的输出如下所示

我是**粗体**. 我是`<em>`斜体`</em>`
