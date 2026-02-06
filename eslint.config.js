// eslint.config.js
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
    {
        ignores: ['**/dist/**', '**/node_modules/**', '**/coverage/**'],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
    ...angular.configs.tsRecommended,
    {
        files: ['src/**/*.ts'],
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.json'],
                createDefaultProgram: true,
            },
        },
        plugins: {
            'prettier': prettierPlugin
        },
        rules: {
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    "selector": "variable",
                    "format": ["camelCase"]//,
                    //"message": "Las variables deben ir en camelCase."
                },
                {
                    "selector": "variable",
                    "type": ["array"],
                    "filter": {
                        "regex": "^lst",
                        "match": true
                    },
                    "format": ["camelCase"],
                    "prefix": ["lst"]//,
                    //"message": "Los arrays deben llevar el prefijo 'lst' (ej: lstClientes)."
                },
                {
                    "selector": "class",
                    "format": ["PascalCase"]//,
                    //"message": "Las clases deben ir en PascalCase."
                }
            ],
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
                { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
                { blankLine: 'any', prev: ['case', 'default'], next: 'break' },
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: 'block', next: '*' },
                { blankLine: 'always', prev: '*', next: 'block' },
                { blankLine: 'always', prev: 'import', next: ['const', 'let', 'var'] }
            ],

            '@angular-eslint/component-selector': [
                'error',
                { type: 'element', prefix: 'p', style: 'kebab-case' }
            ],
            '@angular-eslint/directive-selector': [
                'error',
                { type: 'attribute', prefix: 'p', style: 'camelCase' }
            ],

            'no-console': 'error', 
            '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component', 'Page'] }], 

            ...prettierConfig.rules,
        },
    },
    {
        files: ['src/**/*.html'],
        extends: [...angular.configs.templateRecommended],
        rules: {
            '@angular-eslint/template/eqeqeq': ['error', { allowNullOrUndefined: true }]
        },
    }
);