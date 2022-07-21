---
title: Markdown高级
icon: info
category: Markdown
article: false
tag:
  - Markdown
---

> :warning:**警告：**Markdown 未正式支持的解决方法。

## 概述

> 大多数使用 Markdown 的人会发现基本和扩展的语法元素可以满足他们的需求。但很有可能，如果你使用 Markdown 的时间足够长，你会不可避免地发现它不支持你需要的东西。此页面提供了解决 Markdown 限制的提示和技巧。

## 目录

> 一些 Markdown 应用程序，如 Markdeep 可以从你的标题自动生成目录（也称为 toc ） ，但这不是所有 Markdown 应用程序都提供的功能。但是，如果您的 Markdown 应用程序支持标题 ID，您可以使用列表和一些链接为您的 Markdown 文件创建目录。

```markdown
#### 目录

- [强调](#underline)
- [缩进](#indent)
- [中心](#center)
- [颜色](#color)
```

渲染的输出如下所示：

- [强调](#underline)
- [缩进](#indent)
- [中心](#center)
- [颜色](#color)

## <a name="underline">强调</a>

> 下划线文本不是您通常在网络写作中看到的，可能是因为带下划线的文本几乎是链接的同义词。但是，如果您正在撰写论文或报告，您可能需要能够在单词和短语下划线。Bear 和 Simplenote 等一些应用程序提供了对文本下划线的支持，但 Markdown 本身并不支持下划线。如果您的 Markdown 处理器支持 HTML，您可以使用`<ins>`HTML 标记为文档中的文本添加下划线。

```markdown
其中一些话将<ins>加下划线</ins>.
```

渲染的输出如下所示：

其中一些话将<ins>加下划线</ins>.

## <a name="indent">缩进（制表符）</a>

> 制表符和空格在 Markdown 中有特殊的含义。您可以使用尾随空格来创建换行符，并且可以使用制表符来创建代码块。但是，如果您需要使用 Tab 键以老式方式缩进段落怎么办？Markdown 并没有提供一种简单的方法来做到这一点。
>
> 您最好的选择可能是使用支持缩进的 Markdown 编辑器。这在更面向桌面发布的应用程序中很常见。例如，iA Writer 允许您在应用程序首选项中自定义编辑器的缩进设置。它还提供模板自定义选项，以便您可以使呈现的文档看起来像您期望的那样，缩进等等。
>
> 如果您的 `Markdown 处理器支持HTML` ，另一种选择是使用 HTML 实体作为不间断空格 ( &nbsp;)。这可能应该是您最后的选择，因为它可能会变得很尴尬。基本上，==&nbsp;==您的 Markdown 源代码中的每个都将被渲染输出中的空格替换。因此，如果您&nbsp;在段落之前粘贴四个实例，则该段落看起来像是缩进了四个空格。

```markdown
&nbsp;&nbsp;&nbsp;&nbsp;这是我缩进段落的第一句话。
```

渲染的输出如下所示：

&nbsp;&nbsp;&nbsp;&nbsp;这是我缩进段落的第一句话。

## <a name="center">中心</a>

> 在撰写论文或报告时，必须能够使文本居中。不幸的是，Markdown 没有任何文本对齐的概念（一个可能的例外是使用表格时）。好消息是您可以使用一个 HTML 标签：`<center>`. 如果您的 `Markdown 处理器支持HTML`，您可以将这些标签放置在您想要居中对齐的任何文本周围。

```markdown
<center>此文本居中。</center>
```

渲染的输出如下所示：

<center>此文本居中。</center>

> `<center>`HTML 标记在技术上受支持，但已正式弃用，这意味着它现在可以工作，但您不应该使用它。不幸的是,没有另一种纯 HTML 替代方案。您可以尝试使用其中一种 CSS 替代方案。`<center>`并非所有 Markdown 应用程序都提供 CSS 支持，但如果您正在使用的应用程序提供 CSS 支持，这里有一个标签的替代方案：

```markdown
<p style="text-align:center">此文本居中。</p>
```

如果您的 Markdown 应用程序支持此功能，则输出如下所示：

<p style="text-align:center">此文本居中。</p>

## <a name="color">颜色</a>

```markdown
<p style="color:blue">将此文本设为蓝色。</p>
```

如果您的 Markdown 应用程序支持此功能，则输出如下所示：

<p style="color:blue">将此文本设为蓝色。</p>

## 注释

> 有些人需要能够在他们的 Markdown 文件中编写不会出现在渲染输出中的句子。这些评论本质上是隐藏的文本。文档的作者可以查看文本，但不会打印在网页或 PDF 上。Markdown 本身并不支持评论，但一些有进取心的人设计了一个解决方案。
>
> 要添加注释，请将文本放在括号内，后跟冒号、空格和井号（例如，`[comment]: #`）。您应该在评论之前和之后放置空行。

```markdown
这是一个可见的段落。
[我这是注释！不可见]: #
这是另一个可见的段落。
```

## 告诫

> 如果您需要添加警告，您可以使用带有表情符号和强调的块引号来创建看起来类似于您在其他网站上看到的警告的内容。

```markdown
:warning: **警告：**请勿按下红色大按钮。

:memo: **注意：**日出很美。

:bulb: **提示：**记得珍惜生活中的小事。
```

渲染的输出如下所示：

:warning: **警告：**请勿按下红色大按钮。

:memo: **注意：**日出很美。

:bulb: **提示：**记得珍惜生活中的小事。

## 图片尺寸

> 图像的 Markdown 语法不允许您指定图像的宽度和高度。如果您需要调整图像大小并且您的 Markdown 处理器支持 HTML，您可以使用带有和属性的 imgHTML 标签来设置图像的尺寸（以像素为单位）。widthheight

```markdown
<img src="./assets/image-20220716172445057.png" width="100%" height="500">
```

渲染的输出如下所示：

<img src="./assets/image-20220716172445057.png" width="100%" height="500">

## 图片说明

> Markdown 本身并不支持图像标题，但有两种可能的解决方法。如果您的 Markdown 应用程序支持 HTML，您可以使用 figure 和 figcaptionHTML 标签为您的图像添加标题。

```markdown
<figure>
    <img src="./assets/image-20220716172445057.png"
         alt="我是说明">
    <figcaption>新墨西哥州阿尔伯克基郊外的一条单轨小径。</figcaption>
</figure>
```

渲染的输出如下所示：

<figure>
    <img src="./assets/image-20220716172445057.png"
         alt="我是说明">
    <figcaption>新墨西哥州阿尔伯克基郊外的一条单轨小径。</figcaption>
</figure>

## 链接目标

> 有些人喜欢创建在新选项卡或窗口中打开的链接。链接的 Markdown 语法不允许您指定 target 属性，但如果您的 Markdown 处理器支持 HTML，您可以使用 HTML 创建这些链接。

```markdown
<a href="https://www.markdownguide.org" target="_blank">学习 Markdown!</a>
```

渲染的输出如下所示：

<a href="https://www.markdownguide.org" target="_blank">学习 Markdown!</a>

## 表格格式

> Markdown 表是出了名的挑剔。您不能使用许多 Markdown 语法元素来格式化表格单元格中的文本。但是至少有两个常见的表格问题有解决方法：换行符和列表。

## 表格单元格内的换行符

> `<br>`您可以使用一个或多个 HTML 标记分隔表格单元格中的段落。

```markdown
| 句法 | 描述                      |
| ---- | ------------------------- |
| 标题 | 标题                      |
| 段落 | 第一段。<br><br> 第二段。 |
```

渲染的输出如下所示：

| 句法 | 描述                      |
| ---- | ------------------------- |
| 标题 | 标题                      |
| 段落 | 第一段。<br><br> 第二段。 |

## 表格单元格内的列表

> 您可以使用 HTML 标记在表格单元格中添加列表。

```markdown
| 句法 | 描述                                                      |
| ---- | --------------------------------------------------------- |
| 标题 | 标题                                                      |
| 段落 | 这是一个清单！<ul><li>第一项。</li><li>项目二。</li></ul> |
```

渲染的输出如下所示：

| 句法 | 描述                                                      |
| ---- | --------------------------------------------------------- |
| 标题 | 标题                                                      |
| 段落 | 这是一个清单！<ul><li>第一项。</li><li>项目二。</li></ul> |

## 视频

> 如果您的 Markdown 应用程序支持 HTML，您应该能够通过复制和粘贴 YouTube 或 Vimeo 等视频网站提供的 HTML 代码将视频嵌入到您的 Markdown 文件中。如果您的 Markdown 应用程序不支持 HTML，则无法嵌入视频，但您可以通过添加图像和视频链接来接近。您几乎可以使用任何视频服务上的任何视频来做到这一点。

> YouTube 会自动为每个视频 ( https://img.youtube.com/vi/YOUTUBE-ID/0.jpg) 生成一张图片，因此我们可以使用该图片并将图片链接到 YouTube 上的视频。在我们替换图像替换文本并添加视频 ID 后，我们的示例如下所示：

```markdown
[![Less Than Jake — Scott Farcas Takes It On The Chin](https://img.youtube.com/vi/PYCxct2e0zI/0.jpg)](https://www.youtube.com/watch?v=PYCxct2e0zI)
```

[![Less Than Jake — Scott Farcas Takes It On The Chin](https://img.youtube.com/vi/PYCxct2e0zI/0.jpg)](https://www.youtube.com/watch?v=PYCxct2e0zI)
