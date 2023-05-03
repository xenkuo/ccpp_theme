# README

On VS Code, you deserve a better color theme to C/C++ language.

With the semantic tokens supplied by MS C/C++ extension or clangd extension, VS code theme could recognize more syntax tokens for C/C++. MS did officially provide some specific themes to support the semantic tokens, but they all can't release the real power of semantic token. **C/C++ Theme** could give you more.

C/C++ Theme could recognize below tokens and provide a systematic, consistent and peaceable visual experience.

> Variable design
![](Image/README_2023-05-03-12-19-32.png)

> Function design
![](Image/README_2023-05-03-12-20-39.png)

> Type Design
![](Image/README_2023-05-03-12-20-20.png)

> Misc Deisgn
![](Image/README_2023-05-03-12-20-58.png)

> The Design Principle
![](Image/README_2023-05-03-12-21-55.png)


## Development

> Token format

`(*|tokenType)(.tokenModifier)*(:tokenLanguage)?`

> References

- [The Semantic Highlight Guide from VSCode](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide)