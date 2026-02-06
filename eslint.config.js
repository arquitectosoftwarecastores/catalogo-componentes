import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
    // 1. IGNORADOS GLOBALES
    {
        ignores: ['**/dist/**', '**/node_modules/**', '**/coverage/**'],
    },

    // 2. CONFIGURACIÓN PARA TYPESCRIPT (Lógica y Componentes)
    {
        files: ['src/**/*.ts'],
        // Movemos los "extends" aquí dentro para que solo afecten a archivos .ts
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
            ...angular.configs.tsRecommended,
        ],
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
            "no-console": "error",
            
            // REGLA DE NOMBRES: Corregida para evitar errores de esquema
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: 'variable',
                    format: ['camelCase']
                },
                {
                    selector: 'variable',
                    filter: {
                        regex: '^lst',
                        match: true
                    },
                    format: ['camelCase'],
                    prefix: ['lst']
                },
                {
                    selector: 'class',
                    format: ['PascalCase']
                }
            ],

            // ESPACIADO DE LÍNEAS
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
                { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: 'block', next: '*' },
                { blankLine: 'always', prev: '*', next: 'block' }
            ],

            // SELECTORES DE ANGULAR
            '@angular-eslint/component-selector': [
                'error',
                { type: 'element', prefix: 'p', style: 'kebab-case' }
            ],
            '@angular-eslint/directive-selector': [
                'error',
                { type: 'attribute', prefix: 'p', style: 'camelCase' }
            ],

            '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component', 'Page'] }], 

            // PRETTIER (Siempre al final para evitar conflictos)
            ...prettierConfig.rules,
        },
    },

    // 3. CONFIGURACIÓN PARA HTML (Templates de Angular)
    {
        files: ['src/**/*.html'],
        // Usamos extends aquí para que las reglas de TS no toquen el HTML
        extends: [
            ...angular.configs.templateRecommended,
            ...angular.configs.templateAccessibility,
        ],
        rules: {
            '@angular-eslint/template/eqeqeq': ['error', { allowNullOrUndefined: true }]
        },
    }
);