import js from '@eslint/js';
import typescript from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
  // Ignore patterns
  {
    ignores: ['dist/**', 'node_modules/**', 'drizzle/**', '.eslintrc.js'],
  },

  // Base config for all files
  js.configs.recommended,
  ...typescript.configs.recommended,
  prettier,
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
      parser: typescript.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },

  // Test files
  {
    files: ['**/*.spec.ts', '**/*.e2e-spec.ts', 'test/**/*.ts'],
    languageOptions: {
      parser: typescript.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        // Don't use project for test files
      },
      globals: {
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
  },
];
