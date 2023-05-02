# README

## References
- [The Semantic Highlight Guide from VSCode](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide)


## The Design

* Global variables have the highest priority to highlight, the only other token has similar highlight is label.
* Functions and the calls have a unique highlight color, with minor difference: italic or not.
* The logic operators are highlighted with underline and high contrast color
* Enum and macro are both strong type but with different color
* All `struct` related categories are highlighted differently
* String is de-lighted as normally it have limited info to programers
* Key words use unique color

### Token format

`(*|tokenType)(.tokenModifier)*(:tokenLanguage)?`

## Semantic of Clangd

> variable

- readonly
- declaration
- globalScope, fileScope, functionScope

> parameter:

- declaration
- functionScope

> function

- declaration
- defaultLibrary
- globalScope, fileScope

## Semantic Token of Microsfot C/C++

> variable

- global, local

> parameter

- NA

> function

- NA, but textmate can tell function call from function declaration

