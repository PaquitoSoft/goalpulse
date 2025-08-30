import js from '@eslint/js';
import typescript from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
  // Base configuration for all files
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/coverage/**',
      '**/drizzle/**',
      '**/.turbo/**',
    ],
  },

  // JavaScript/TypeScript files
  js.configs.recommended,
  ...typescript.configs.recommended,
  prettier,
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      parser: typescript.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
];
