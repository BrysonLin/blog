---
title: Markdown 基本语法
icon: markdown
article: true
category: Markdown
tag:
  - Markdown初级
---

::: info Mardown 语法提示

- 几乎所有 Markdown 应用程序都支持原始 Markdown 设计文档中概述的基本语法

- Markdown 处理器之间存在微小的区别和差异

:::

<!-- more -->

## 标题

::: tip 标题语法

- 要创建标题，请在单词或短语前添加数字符号（`#`{.code}），您使用的数字符号的数量应与标题的级别想对应，最高到`六级`{.code}。

- 例如：要创建标题级别三（`<h3>`{.code}）,请使用三个字符符号加空格 （列如 `### 我是三级标题`）

:::

| Markdown        | HTML                       | 渲染输出          |
| --------------- | -------------------------- | ----------------- |
| # 一级标题      | `<h1>一级标题</h1>`{.html} | <h1>一级标题</h1> |
| ## 二级标题     | `<h2>二级标题</h2>`{.html} | <h2>二级标题</h2> |
| ### 三级标题    | `<h3>三级标题</h3>`{.html} | <h3>三级标题</h3> |
| #### 四级标题   | `<h4>四级标题</h4>`{.html} | <h4>四级标题</h4> |
| ##### 五级标题  | `<h5>五级标题</h5>`{.html} | <h5>五级标题</h5> |
| ###### 六级标题 | `<h6>六级标题</h6>`{.html} | <h6>六级标题</h6> |

## 段落

::: tip 段落语法

- 要创建段落，请使用空行分隔一行或多行文本。

- 段落中添加`<br>`{.code}可以换行。

:::

| Markdown                                                                | HTML                                                                                    | 渲染输出                                                                |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 我真的很喜欢使用 Markdown。我想从现在开始我会用它来格式化我的所有文档。 | `<p>我真的很喜欢使用 Markdown。我想从现在开始我会用它来格式化我的所有文档。</p>`{.html} | 我真的很喜欢使用 Markdown。我想从现在开始我会用它来格式化我的所有文档。 |

## 换行符

::: tip 换行符语法

- 要创建换行符或换行符（`<br>`{.code}）,请以两个或多个空格结束一行，然后键入 return。

:::

| Markdown                              | HTML                                         | 渲染输出                     |
| ------------------------------------- | -------------------------------------------- | ---------------------------- |
| `这是第一行。<br>这是第二行。`{.html} | `<p>这是第二行。<br>这是第二行。</p>`{.html} | 这是第二行。<br>这是第二行。 |

## 强调（加粗）

::: tip 语法

- 您可以通过将文本设置为 **粗体** 或 **斜体** 来增加重点。

- 要加粗文本，请在单词或短语 `前后`{.code}添加`**`{.code}或下`__`{.code}。为了强调单词的中间部分，请在字母周围添加两个`不带空格`{.code}的星号。

:::

| Markdown                         | HTML                                          | 渲染输出               |
| -------------------------------- | --------------------------------------------- | ---------------------- |
| 我只是喜欢 `**粗体字。**`{.html} | 我只是喜欢 `<strong>粗体字。</strong>`{.html} | 我只是喜欢**粗体字。** |
| 我只是喜欢 `__粗体字。__`{.html} | 我只是喜欢 `<strong>粗体字。</strong>`{.html} | 我只是喜欢**粗体字。** |
| 爱`**是**`{.html}大胆的          | 爱`<strong>是</strong>`{.html}大胆的          | 爱**是**大胆的         |

## 斜体

::: tip 斜体

- 要使文本变为斜体，请在单词或短语前后添加`*`{.code}或`_`{.code}

- 为了强调单词中间的斜体，请在字母周围添加一个`不带空格`{.code}的星号(\*)

:::

```markdown
我是*斜体*字
```

渲染的输出如下所示:<br>

我是*斜体*字

## 块引用

::: tip 语法

- 要创建块引用，请在段落前添加一个大于符号（`>`{.code}）。

:::

```markdown
> 我是一个块引用
```

渲染的输出如下所示：<br>

> 我是一个块引用

### 带有多个段落的块引用

> 块引用可以包含多个段落。`>`{.code}在段落之间的空白行上添加一个。

```markdown
> 我是第一个块引用
>
> 我是多个段落的块引用
```

渲染的输出如下显示：

> 我是第一个块引用

> 我是多个段落的块引用

### 嵌套块引用

> 块引用可以嵌套。在要嵌套的段落前面添加一个`>>`{.code}。

```markdown
> 我是外层块引用
>
> > 我是内层块引用
```

渲染的输出如下所示

> 我是外层块引用
>
> > 我是内层块引用

### 带有其他元素的块引用

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

## 列表

> 您可以将项目组织成 `有序列表`和 `无序列表`。

### 有序列表

> 要创建有序列表，请添加带有`数字后跟句点`{.code}的行项目。数字不必按数字顺序排列，但列表应以`数字一开头`{.code}。

| Markdown                                                                 | HTML                                                                                                                                             | 渲染输出                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| 1. &nbsp;第一项<br>2. &nbsp;第二项<br>3. &nbsp;第三项<br>4. &nbsp;第四项 | `<ol>`{.html}<br>`<li>第一项</li>`{.html}<br>`<li>第二项</li>`{.html}<br>`<li>第三项</li>`{.html}<br> `<li>第四项</li>`{.html}<br>`</ol>`{.html} | <ol><li>第一项</li><li>第二项</li><li>第三项</li><li>第四项</li></ol> |

渲染的输出如下所示：

1. 第一项
2. 第二项
3. 第三项
4. 第四项

### 无序列表

> 要创建无序列表，请在行项目前添加破折号 ( `-`)、星号 ( `*`) 或加号 ( `+`)。·缩进一项或多项·以创建`嵌套列表`。

| Markdown                                                         | HTML                                                                                                                                            | 渲染输出                                                              |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| -&nbsp;第一项<br>-&nbsp;第二项<br>-&nbsp;第三项<br>-&nbsp;第四项 | `<ul>`{.html}<br>`<li>第一项</li>`{.html}<br>`<li>第二项</li>`{.html}<br>`<li>第三项</li>`{.html}<br>`<li>第四项</li>`{.html}<br>`</ul>`{.html} | <ul><li>第一项</li><li>第二项</li><li>第三项</li><li>第四项</li></ul> |

渲染的输出如下所示

- 第一项
- 第二项
- 第三项
- 第四项

### 在列表中添加元素

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

> 要将单词或短语表示为代码，请将其括在反引号 **`** 中。

| Markdown                         | HTML                                            | 渲染输出                     |
| -------------------------------- | ----------------------------------------------- | ---------------------------- |
| 在命令提示符处，键入 \` nano \`. | 在命令提示符处，键入`<code>nano</code>`{.html}. | 在命令提示符处，键入 `nano`. |

### 代码块

> 要创建代码块，请将块的`每一行缩进至少四个空格或一个制表符|`{.code}。

```markdown
    <html>
      <head>
      </head>
    </html>
```

渲染的输出如下所示

```html
<html>
  <head> </head>
</html>
```

## 链接

> 要创建链接，请将链接文本括在中括号中（例如，`[Duck Duck Go]`{.code}），然后紧跟在括号中的 URL（例如，`(https://duckduckgo.com)`{.code}）。

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

> 要将 URL 或电子邮件地址快速转换为链接，请将其括在`尖括号中<>`{.code}。

```markdown
<https://www.markdownguide.org>
<fake@example.com>
```

渲染的输出如下所示

<https://www.markdownguide.org>
<fake@example.com>

### 格式化链接

> 要**强调**链接，请在`方括号和圆括号前后添加星号`。要将链接表示为**code**，请在括号中添加`反引号`。

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

> 要添加图像，请添加感叹号 (`!`{.code})，后跟`括号中的替代文本`{.code}，以及括号中的图像资源的`路径或 URL`{.code}。您可以选择在路径或 URL 后添加`引号中的标题`{.code}。

```markdown
![文中添加图片](/img/typor/image-20220714202411426.png "我是标题")
```

渲染的输出如下所示

![文中添加图片](/img/typor/image-20220714202411426.png "我是标题")

### 链接图像

> 要添加指向图像的链接，请将图像的 Markdown 括在括号中，然后将链接添加到括号中。

```markdown
[![image-20220714202922210](/img/typor/image-20220714202922210.png "按住ctrl+左键跳转百度")](http://baidu.com)
```

[![image-20220714202922210](/img/typor/image-20220714202922210.png "按住ctrl+左键跳转百度")](http://baidu.com)

## 转义字符

> 要显示原本用于在 Markdown 文档中格式化文本的文字字符，请在字符前面添加反斜杠 (`\`{.code})。

```markdown
\* 演示转义符文字\*
```

渲染的输出如下所示

\* 演示转义符文字\*

## HTML

> 许多 Markdown 应用程序允许您在 Markdown 格式的文本中使用 HTML 标签。如果您更喜欢某些 HTML 标记而不是 Markdown 语法，这将很有帮助。例如，有些人发现对图像使用 HTML 标记更容易。当您需要更改元素的属性（例如指定文本的颜色或更改图像的宽度）时，使用 HTML 也很有帮助。
>
> 要使用 HTML，请将标签放在 Markdown 格式文件的文本中。

```markdown
我是**粗体**. 我是<em>斜体</em>
```

渲染的输出如下所示

我是**粗体**. 我是<em>斜体</em>
