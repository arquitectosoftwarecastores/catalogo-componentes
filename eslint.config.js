import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
    // 1. Configuración Global de Ignorados
    {
        ignores: ['**/dist/**', '**/node_modules/**', '**/coverage/**', 'src/assets/**'],
    },

    // 2. BLOQUE PARA TYPESCRIPT: Aquí "encerramos" las reglas de TS
    {
        files: ['src/**/*.ts'],
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
            
            // Regla de nombres: Aseguramos que no colisionen
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: 'class',
                    format: ['PascalCase']
                },
                {
                    selector: 'variable',
                    format: ['camelCase']
                },
                {
                    selector: 'variable',
                    filter: { regex: '^lst', match: true },
                    format: ['camelCase'],
                    prefix: ['lst']
                }
            ],

            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
                { blankLine: 'always', prev: '*', next: 'return' }
            ],

            '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component', 'Page'] }],
            
            // Prettier al final para que mande sobre el formato
            ...prettierConfig.rules,
            "prettier/prettier": "error"
        },
    },

    // 3. BLOQUE PARA HTML: Aquí solo reglas de Angular Template
    {
        files: ['src/**/*.html'],
        extends: [
            ...angular.configs.templateRecommended,
            ...angular.configs.templateAccessibility,
        ],
        rules: {
            '@angular-eslint/template/eqeqeq': ['error', { allowNullOrUndefined: true }]
        },
    }
);