// eslint.config.js
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  {
    // Ignorar archivos que no queremos analizar
    ignores: ['**/dist/**', '**/node_modules/**', '**/coverage/**'],
  },
  // --- Configuración Global Recomendada ---
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...angular.configs.tsRecommended,

  // --- Bloque para TypeScript ---
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
      // 1. REGLA DE ORO: Prefijo 'lst' en arrays
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "variable",
          "type": ["array"],
          "format": ["camelCase"],
          "prefix": ["lst"],
          "message": "Los arrays deben llevar el prefijo 'lst' (ej: lstClientes)."
        },
        {
          "selector": "variable",
          "format": ["camelCase"],
          "leadingUnderscore": "forbid",
          // Excluimos los que ya empiezan por lst para que no choquen
          "filter": { "regex": "^lst", "match": false }
        },
        {
          "selector": "class",
          "format": ["PascalCase"],
          "message": "Las clases deben ir en PascalCase."
        }
      ],

      // 2. TUS REGLAS DE FORMATO (Padding)
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

      // 3. REGLAS ANGULAR (Selectores con prefijo 'p')
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'p', style: 'kebab-case' }
      ],
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'p', style: 'camelCase' }
      ],
      
      // 4. OTRAS REGLAS TUYAS
      'no-console': 'error', // Estricto según tu petición
      '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component', 'Page'] }], // Ajustado a estándar
      
      // Integración Prettier (siempre al final de las reglas)
      ...prettierConfig.rules,
    },
  },

  // --- Bloque para HTML (Templates) ---
  {
    files: ['src/**/*.html'],
    extends: [...angular.configs.templateRecommended],
    rules: {
      '@angular-eslint/template/eqeqeq': ['error', { allowNullOrUndefined: true }]
    },
  }
);