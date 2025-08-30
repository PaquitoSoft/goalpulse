# GoalPulse - Tech Stack & Code Standards

## 📋 Overview

GoalPulse is a modern monorepo project built with a React PWA frontend, NestJS backend, and shared TypeScript utilities. The project follows industry best practices for code quality, type safety, and maintainability.

## 🏗️ Architecture

### Monorepo Structure

- **Package Manager**: pnpm v9.15.0 with workspace support
- **Workspace Configuration**: pnpm-workspace.yaml defines apps/_ and packages/_ as workspaces
- **Build System**: TypeScript with modular compilation across packages

### Project Layout

```
goalpulse/
├── apps/
│   ├── api/          # NestJS backend API
│   └── web/          # React PWA frontend
├── packages/
│   └── shared/       # Shared TypeScript types and utilities
└── docs/             # Documentation
```

## 🛠️ Tech Stack

### Frontend (apps/web)

- **Framework**: React 19.0.0
- **Build Tool**: Vite 6.0.3 with React plugin
- **Language**: TypeScript 5.7.2
- **Styling**:
  - Tailwind CSS 3.4.15 with custom design system
  - CSS Variables for theming
  - tailwindcss-animate for animations
- **UI Components**:
  - Radix UI primitives (@radix-ui/react-slot)
  - shadcn/ui component system
  - Lucide React icons
- **State Management**: @tanstack/react-query 5.62.7
- **PWA**: vite-plugin-pwa with Workbox for service worker
- **Utilities**:
  - class-variance-authority for component variants
  - clsx + tailwind-merge for conditional classes

### Backend (apps/api)

- **Framework**: NestJS 10.4.20
- **Language**: TypeScript 5.6.3
- **Database**:
  - Drizzle ORM 0.44.5 with SQLite/Turso
  - drizzle-zod for schema validation
- **Validation**: Zod 3.24.1
- **Configuration**: @nestjs/config for environment management
- **Documentation**: @nestjs/swagger for API documentation
- **Testing**: Jest with Supertest for e2e testing

### Shared Package (packages/shared)

- **Purpose**: Shared TypeScript types, schemas, and utilities
- **Validation**: Zod schemas for runtime type checking
- **Architecture**: Barrel exports with organized structure

### Development Tools

- **Linting**: ESLint 9.15.0 with TypeScript support
- **Formatting**: Prettier 3.4.2
- **Type Checking**: TypeScript with strict mode enabled
- **Testing**: Jest for unit and e2e testing

## 📐 Code Standards

### TypeScript Configuration

- **Target**: ES2020 with strict mode enabled
- **Module System**: ESNext with bundler resolution
- **Path Mapping**: Workspace packages accessible via `@goalpulse/shared`
- **JSX**: React JSX transform

### Linting Rules (ESLint)

- **Base**: @eslint/js recommended + TypeScript recommended
- **Key Rules**:
  - `@typescript-eslint/no-unused-vars`: Error (with `_` prefix ignore)
  - `@typescript-eslint/no-explicit-any`: Warning
  - `prefer-const`: Error
  - `no-var`: Error
- **React-specific**:
  - React Hooks rules enforced
  - React Refresh for HMR compatibility
- **Test Files**: Special configuration for Jest globals

### Code Formatting (Prettier)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 110,
  "tabWidth": 2,
  "useTabs": false
}
```

### File Organization

- **Barrel Exports**: Index files re-export module contents
- **Schema Co-location**: Zod schemas alongside TypeScript types
- **Modular Structure**: Clear separation of concerns across modules

## 🗂️ Directory Conventions

### API Structure

```
apps/api/src/
├── database/
│   ├── database.module.ts
│   └── schema/
│       ├── index.ts          # Barrel export
│       └── *.schema.ts       # Drizzle schemas with Zod validation
├── modules/                  # Feature modules
├── app.module.ts            # Root application module
└── main.ts                  # Application entry point
```

### Web Structure

```
apps/web/src/
├── components/
│   └── ui/                  # shadcn/ui components
├── hooks/                   # Custom React hooks
├── lib/
│   └── utils.ts            # Utility functions
└── App.tsx                 # Main application component
```

### Shared Package Structure

```
packages/shared/src/
├── types/                  # TypeScript interfaces
├── schemas/               # Zod validation schemas
├── utils/                 # Shared utilities
└── index.ts              # Barrel export
```

## 🎨 Design System

### Tailwind CSS Configuration

- **Dark Mode**: Class-based dark mode support
- **Design Tokens**: CSS variables for consistent theming
- **Colors**: Semantic color system (primary, secondary, muted, etc.)
- **Responsive**: Mobile-first approach with container queries
- **Animations**: Custom keyframes for accordion and other interactions

### Component Architecture

- **shadcn/ui**: Headless component library with Radix UI primitives
- **Variant System**: class-variance-authority for component variants
- **Composition**: Slot-based composition patterns

## 🔧 Build & Development

### Scripts

- **Development**: `pnpm dev` - Runs all workspaces in development mode
- **Build**: `pnpm build` - Builds all packages for production
- **Linting**: `pnpm lint` - Runs ESLint across all workspaces
- **Formatting**: `pnpm format` - Formats code with Prettier
- **Type Checking**: `pnpm type-check` - TypeScript compilation check

### Database Management

- **Schema Generation**: `pnpm db:generate` - Generates migration files
- **Migration**: `pnpm db:migrate` - Applies schema changes
- **Studio**: `pnpm db:studio` - Opens Drizzle Studio for database inspection

## 🧪 Testing Strategy

### API Testing

- **Unit Tests**: Jest with TypeScript support
- **E2E Tests**: Supertest for HTTP endpoint testing
- **Test Environment**: Node.js with isolated test database

### Code Coverage

- **Collection**: Automated coverage collection from `**/*.(t|j)s` files
- **Output**: Coverage reports in `coverage/` directory

## 🚀 Deployment & PWA

### Progressive Web App

- **Service Worker**: Workbox-generated with runtime caching
- **Manifest**: Complete PWA manifest with icons and metadata
- **Caching Strategy**: NetworkFirst for API calls, cache-first for assets
- **Auto-update**: Automatic service worker updates

### Build Optimization

- **Code Splitting**: Vite's automatic code splitting
- **Tree Shaking**: Dead code elimination
- **Asset Optimization**: Automatic asset optimization and hashing

## 📦 Package Management

### Dependency Strategy

- **Workspace Dependencies**: Internal packages use `workspace:*` protocol
- **Version Alignment**: Consistent versions across workspaces
- **Overrides**: Security patches via pnpm overrides

### Security

- **Package Overrides**: Automated security vulnerability patching
- **Dependency Auditing**: Regular security audits via pnpm

## 🔄 Development Workflow

### Code Quality Gates

1. **TypeScript Compilation**: All code must compile without errors
2. **ESLint**: All linting rules must pass
3. **Prettier**: Code must be properly formatted
4. **Tests**: All tests must pass

### Git Hooks (Recommended)

- **Pre-commit**: Run linting and formatting
- **Pre-push**: Run type checking and tests

## 📚 Best Practices

### TypeScript

- Use strict mode configuration
- Prefer interfaces over types for object shapes
- Use Zod schemas for runtime validation
- Leverage type inference where possible

### React

- Use functional components with hooks
- Implement proper error boundaries
- Follow React Query patterns for server state
- Use proper key props for list rendering

### NestJS

- Follow modular architecture patterns
- Use dependency injection effectively
- Implement proper error handling
- Use DTOs with validation decorators

### Database

- Use Drizzle ORM type-safe queries
- Implement proper indexing strategies
- Use transactions for data consistency
- Leverage Zod for schema validation

This tech stack provides a solid foundation for building scalable, maintainable, and type-safe applications with excellent developer experience and modern tooling.
