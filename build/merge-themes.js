#!/usr/bin/env node

/**
 * Theme Merge Script
 * Merges base Dracula theme with C/C++ customizations
 * 
 * Strategy: Scope-based replacement
 * - Customizations completely override base theme tokens with matching scopes
 * - Semantic token customizations override base semantic tokens
 * 
 * Base Theme Source:
 * - Can be a local file OR downloaded from GitHub
 * - Default: dracula-official/theme/dracula.json (v2.24.2)
 */

const fs = require('fs');
const path = require('path');

// File paths
const BASE_THEME_PATH = path.join(__dirname, 'dracula-base.json');
const CUSTOMIZATIONS_PATH = path.join(__dirname, 'customizations.json');
const SEMANTIC_CUSTOMIZATIONS_PATH = path.join(__dirname, 'semantic-customizations.json');

// Output file
const OUTPUT_PATH = path.join(__dirname, '..', 'themes', 'ccpp_theme.json');

/**
 * Read and parse JSON file
 */
function readJsonFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(content);
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error.message);
        process.exit(1);
    }
}

/**
 * Write JSON to file with proper formatting
 */
function writeJsonFile(filePath, data) {
    try {
        const content = JSON.stringify(data, null, 4);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Successfully wrote to ${path.basename(filePath)}`);
    } catch (error) {
        console.error(`Error writing ${filePath}:`, error.message);
        process.exit(1);
    }
}

/**
 * Extract scopes from a token rule for comparison
 */
function getTokenScopes(tokenRule) {
    if (tokenRule.scope) {
        return Array.isArray(tokenRule.scope) ? tokenRule.scope : [tokenRule.scope];
    }
    return [];
}

/**
 * Check if two token rules have overlapping scopes
 */
function hasOverlappingScopes(token1, token2) {
    const scopes1 = getTokenScopes(token1);
    const scopes2 = getTokenScopes(token2);
    
    // Check for any scope overlap
    return scopes1.some(scope1 => scopes2.includes(scope1));
}

/**
 * Merge token colors with scope-based override strategy
 */
function mergeTokenColors(baseTokens, customizationTokens) {
    const merged = [...baseTokens];
    
    customizationTokens.forEach(customToken => {
        // Skip TODO comments and metadata
        if (!customToken.name && !customToken.scope) {
            return;
        }
        
        const customScopes = getTokenScopes(customToken);
        
        // Find and remove any base tokens with overlapping scopes
        const filteredMerged = merged.filter(baseToken => {
            // Keep base tokens that don't overlap with customization
            return !hasOverlappingScopes(baseToken, customToken);
        });
        
        // Add the customization token
        filteredMerged.push(customToken);
        
        // Update merged array
        merged.length = 0;
        merged.push(...filteredMerged);
    });
    
    return merged;
}

/**
 * Merge semantic token colors with key-based override
 */
function mergeSemanticTokenColors(baseSemantic, customSemantic) {
    const merged = { ...baseSemantic };
    
    Object.keys(customSemantic).forEach(key => {
        // Skip TODO comments
        if (key.startsWith('TODO:')) {
            merged[key] = customSemantic[key];
        } else {
            // Override or add custom semantic token
            merged[key] = customSemantic[key];
        }
    });
    
    return merged;
}

/**
 * Main merge function
 */
function mergeThemes() {
    console.log('🎨 Starting theme merge process...\n');
    
    // Read source files
    console.log('📖 Reading base Dracula theme...');
    const baseTheme = readJsonFile(BASE_THEME_PATH);
    
    console.log('📖 Reading C/C++ customizations...');
    const customizations = readJsonFile(CUSTOMIZATIONS_PATH);
    
    console.log('📖 Reading semantic customizations...');
    const semanticCustomizations = readJsonFile(SEMANTIC_CUSTOMIZATIONS_PATH);
    
    // Convert single object customizations to array format
    const customTokensArray = Array.isArray(customizations) ? customizations : [customizations];
    
    // Merge token colors
    console.log('\n🔧 Merging token colors (scope-based override)...');
    const mergedTokenColors = mergeTokenColors(
        baseTheme.tokenColors || [],
        customTokensArray
    );
    console.log(`   Base tokens: ${baseTheme.tokenColors?.length || 0}`);
    console.log(`   Custom tokens: ${customTokensArray.length}`);
    console.log(`   Merged tokens: ${mergedTokenColors.length}`);
    
    // Merge semantic token colors
    console.log('\n🔧 Merging semantic token colors...');
    const mergedSemanticColors = mergeSemanticTokenColors(
        baseTheme.semanticTokenColors || {},
        semanticCustomizations
    );
    console.log(`   Base semantic tokens: ${Object.keys(baseTheme.semanticTokenColors || {}).length}`);
    console.log(`   Added/overridden: ${Object.keys(semanticCustomizations).length}`);
    
    // Create final merged theme
    const mergedTheme = {
        ...baseTheme,
        name: 'C/C++ Theme',
        author: 'Xen Kuo',
        based_dracula_version: '2.24.2',
        dracula: baseTheme.dracula,
        colors: baseTheme.colors,
        tokenColors: mergedTokenColors,
        semanticHighlighting: true,
        semanticTokenColors: mergedSemanticColors
    };
    
    // Write output
    console.log('\n💾 Writing merged theme...');
    writeJsonFile(OUTPUT_PATH, mergedTheme);
    
    console.log('\n✅ Theme merge completed successfully!\n');
    console.log(`Output: ${OUTPUT_PATH}`);
}

// Run the merge
mergeThemes();
