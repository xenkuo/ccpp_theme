# CCPP Theme 介绍

---

**一个专门为 C/C++程序员设计的 VSCode 主题**

---

## 有什么亮点

C/C++ Theme 可以基于 LSP 解析的语法 token 对源文件里更多的元素进行高亮显示。 

目前 VSCode 主流的 C/C++ LSP 有微软 C/C++插件和 clangd 插件， C/C++ Theme 对两者都有相对完整的支持。

借助于 LSP 强大的语法分析能力，C/C++ Theme 提供以下额外的高亮显示：

- 支持全局变量、静态全局变量的高亮
- 显示变量 const 属性
- 区分显示 == 和 =、&& 和 &等逻辑运算发
- 区分显示普通函数和静态函数
- 区分显示 parameter、local variable 及 property
- 区分实现 enum 值和 macro

还有一些其他的细节，大家使用时就慢慢发现了。

## 为什么做这个主题

我是老 K，一个搞了很多年嵌入式开发的程序员。除了日常工作外，有时间时就会写些自己会用到的工具。之前开源了一个串口助手软件：[comNG](https://gitee.com/xenkuo/comNG)，似乎大家挺喜欢了，这给了我很大的鼓励。

由于平时工作时总是用 C 语言开发相关的项目，所以对 C 语言的语法高亮有些特殊的需求。后面找遍了 VSCode 的插件市场，也没发现一个合适的。后来知道了 VSCode 基于 LSP 可以对 [semantic token](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide) 支持，于是就有了自己写一个主题插件的想法。

这个主题还是耗费了挺多精力的，或者准确的说这已经是第二代了。第一代的名字叫 C Enhanced Theme，做得比较简单暴力，大家反馈也不错，全 5 星好评（只有四个用户打星了 :))。第二代增加了基本的对 C++的支持，对 clangd 的支持，最重要的是尝试用系统化的方法对语法高亮进行设计，这也是本主题能对 C 语言、C++、C/C++ LSP、clangd LSP 等多种场景提供统一视觉体验的根本原因。

下面给各位看官炫几张截图：

> C/C++ Theme 配合 MS C/C++插件

![](Image/README_2023-06-22-21-02-03.png)

> C/C++ Theme 配合 clangd 插件

![](Image/README_2023-06-22-21-03-10.png)

**C/C++ Theme** 系统设计图：

![](Image/The%20C%202023-04-29%2021.23.52.excalidraw.png)

## 怎么使用

VSCode 插件市场直接搜索 C/C++ Theme 就可以了。注意不是 C/C++ Themes，这个是微软官方用来展示 semantic highlight 的示例主题，但它并没有展示特别多的特殊能力。它担不起这么响亮的名字 :) ，于是我就借过来了，不过分吧。

## 大家一起参与

仓库地址在： [ccpp_theme](https://github.com/xenkuo/ccpp_theme)，有兴趣大家一起来设计啊。你也看到了，这个工作量还是不低的，非常需要你的贡献。