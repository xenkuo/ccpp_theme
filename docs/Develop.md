# Development Guide

## Quick Start

### Test and Debug the Theme

1. `code .` under the repo's root folder
2. Press `F5` to start the debug mode

### Package the Theme

Run `vsce package` under the repo's root folder.

---

## Build System

### Architecture

The theme uses a modular approach with separated customization files:

**Source Files:**
1. **Base Theme** - `build/dracula-base.json`
   - Official Dracula theme (version 2.24.2)
   - Provides base colors, token colors, and semantic tokens

2. **Token Customizations** - `build/customizations.json`
   - Your C/C++ specific textmate token customizations

3. **Semantic Token Customizations** - `build/semantic-customizations.json`
   - Your C/C++ specific semantic token customizations

**Build Output:**
- **Final Theme** - `themes/ccpp_theme.json` (GENERATED - do not edit manually)

**Build Script:**
- **Merge Script** - `build/merge-themes.js`

### File Structure

```
ccpp_theme/
├── themes/
│   ├── ccpp_theme.json               # ⚠️ GENERATED
│   └── ccpp_theme_light.json         # Light theme
├── build/
│   ├── dracula-base.json             # Base Dracula (v2.24.2)
│   ├── merge-themes.js               # Build script
│   ├── customizations.json           # Your tokens
│   └── semantic-customizations.json  # Semantic tokens
├── color-table.md                    # Color reference
└── package.json                      # Extension manifest
```

### Build Commands

```bash
# Build the theme
npm run build

# This merges base + customizations → themes/ccpp_theme.json
```

### Development Workflow

1. **Modify** your customizations in `build/customizations.json` or `build/semantic-customizations.json`
2. **Build**: `npm run build`
3. **Test**: Reload VS Code window to see changes
4. **Repeat** until satisfied

### Merge Strategy

**Token Colors: Scope-Based Override**
- When customization scopes overlap with base tokens, customization completely replaces base
- Non-overlapping tokens from both files are preserved

**Semantic Token Colors: Key-Based Override**
- Custom semantic tokens override base tokens by key name
- New semantic tokens are added

### Why Modular?

**Benefits:**
- ✅ Easier updates - Update base Dracula without losing customizations
- ✅ Clearer maintenance - See exactly what you've changed
- ✅ Better version control - Separate concerns in commits
- ✅ Reusability - Apply customizations to other base themes

**Before:** 1564 lines monolithic file  
**After:** Base theme untouched + ~380 lines of your changes

### Troubleshooting

**Build fails with JSON error:**
- Check for trailing commas, proper quote escaping, valid JSON syntax
- Use VS Code's built-in JSON validation

**Changes not appearing:**
1. Run `npm run build` again
2. Reload VS Code window (`Ctrl+Shift+P` → "Reload Window")
3. Ensure you're using "C/C++ Pro Theme" (not Light variant)

**Scope conflicts:**
- Verify scope matches exactly
- Some scopes might be semantic, not textmate
- Use developer tools to inspect token scopes

> ⚠️ **Never edit `themes/ccpp_theme.json` directly** - it will be overwritten on next build. Always edit the customization files instead.

---

## Technical Reference

### Token Format

`(*|tokenType)(.tokenModifier)*(:tokenLanguage)?`

### References

- [The Semantic Highlight Guide from VSCode](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide)
