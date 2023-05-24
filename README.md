# README

---

**A theme dedicated for C/C++ programer.**

---

**C/C++ Theme** utilizes power of semantic tokenization engine and the awesome [Dracula Official Theme](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)
, provides a systematic, consistent C/C++ programming experience.

In short, **C/C++ Theme** recognizes more C/C++ syntax symbols and renders them in a opinionated way. :) Below are some samples.

> C/C++ Theme with MS C/C++ extension

![](Image/README_2023-05-24-19-46-34.png)

> C/C++ Theme with clangd extension

![](Image/README_2023-05-24-19-49-49.png)

**C/C++ Theme** supports both MS C/C++ extension and clangd extension, and provides a consistent(similar but not exactly same) rendering result. If you want to know the exact tokens **C/C++ Theme** could support, please refer to below image:

![](Image/The%20C%202023-04-29%2021.23.52.excalidraw.png)

Beside of recognizing of so many tokens, **C/C++ Theme** tries to have kind of design logic. It has these built-in principles to achieve the goal:

1. Priority Design
   1. Scope has highest priority
   2. Then type
   3. Then readonly, or declaration, or other attributions
2. Consistency Design
   1. Consistency between similar concepts, e.g., static variable shares similar UI with global variable
   2. Consistency between C and C++
   3. Consistency between MS C/C++ and clangd. **C/C++ Theme** leverages the two LSP to get semantic tokens, they generates different semantic token set and names, **C/C++ Theme** aggregate them into a uniform rendering.
   4. Consistency with the based theme [Dracula Official](https://github.com/dracula/visual-studio-code.git). All the colors **C/C++ Theme** used are from the based theme.
3. Style Design
   1. `underline` is a very strong style, it was limited for kind of special tokens. e.g. static variable or static functions.

## Q&A

1. Why this name?
    > Similar with the Microsoft's **C/C++ Themes**? :) Just that themes are not so C/C++, I make this theme. I believe this them is more C/C++ than other. Just try it.
    
2. The support of C++.
    > I don't use much of C++, so there's only basic support to C++(maybe already enough). If you have better idea to render C++ tokens, welcome to contribute(PR or issue).

3. Why parameter uses `underline` style?
    > The first version of parameter is using the purple color to distinguish it from local variable, but I find this design is too strong and distractive. Then I tried to use some other color, no suitable color could find. The orange seems to be the only acceptable color. Imo, the differentiation between parameter and local variable is necessary, so `underline` style is added to it.

4. Differentiation between MS C++ extension and clangd extension.
    > Both are the top end C/C++ LSP, in summary, clangd offers more precise token types than MS C++, especially to `variable` and `function` types, and it's fast. But MS C/C++ extension offers a more appropriate token set and better compatibility(only my personal experience based on daily usage).


## Development

To contribute or modify the theme, please refer to [Here](./Develop.md).
 