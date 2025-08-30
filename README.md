# GoalPulse

A modern monorepo application built with React PWA frontend and NestJS backend.

## 🏗️ Architecture

This project uses a **PNPM workspace** monorepo structure with:

- **Frontend** (`apps/web`): React + TypeScript + TailwindCSS + PWA
- **Backend** (`apps/api`): NestJS + TypeScript + Drizzle + Turso
- **Shared** (`packages/shared`): Shared TypeScript types and utilities

## 🚀 Quick Start

### Prerequisites

- Node.js 22+ (required for ESLint 9)
- pnpm 9+

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd goalpulse

# Install dependencies
pnpm install

# Build shared package first
pnpm --filter @goalpulse/shared build
```

### Development

```bash
# Start all applications in development mode
pnpm dev

# Or start individually:
pnpm --filter @goalpulse/web dev    # Frontend on http://localhost:5173
pnpm --filter @goalpulse/api dev    # Backend on http://localhost:3001
```

### Database Setup

1. Create a Turso database at [turso.tech](https://turso.tech)
2. Copy `apps/api/env.example` to `apps/api/.env`
3. Update the database credentials in `.env`
4. Run migrations:

```bash
cd apps/api
pnpm db:migrate
```

## 📁 Project Structure

```
goalpulse/
├── apps/
│   ├── web/          # React PWA frontend
│   └── api/          # NestJS backend
├── packages/
│   └── shared/       # Shared types and utilities
├── docs/
└── .github/workflows/
```

## 🛠️ Available Scripts

```bash
# Development
pnpm dev              # Start all apps in dev mode
pnpm build            # Build all apps
pnpm lint             # Lint all packages
pnpm format           # Format code with Prettier
pnpm type-check       # TypeScript type checking
pnpm clean            # Clean build artifacts

# Testing
pnpm test             # Run all tests
pnpm test:e2e         # Run e2e tests
```

## 🔧 Tech Stack

### Frontend

- **React 18** with TypeScript
- **Vite** for build tooling
- **TailwindCSS** for styling
- **shadcn/ui** for UI components
- **React Query** for data fetching
- **PWA** with offline support and push notifications

### Backend

- **NestJS** with TypeScript
- **Drizzle ORM** for database operations
- **Turso** (SQLite) for database
- **Swagger** for API documentation
- **Zod** for validation

### Shared

- **TypeScript** for type definitions
- **Zod** schemas for validation

## 📱 PWA Features

The frontend includes:

- ✅ Service Worker for offline caching
- ✅ Web App Manifest for installability
- ✅ Push notification scaffolding
- ✅ Responsive design

## 🗄️ Database

The application uses **Turso** (SQLite cloud) with **Drizzle ORM**:

- Schema definitions in `apps/api/src/database/schema/`
- Migrations managed with `drizzle-kit`
- Type-safe database queries

## 🚦 CI/CD

GitHub Actions workflow includes:

- ✅ Linting and formatting checks
- ✅ TypeScript type checking
- ✅ Build verification for all apps
- ✅ Test execution
- ✅ Multi-Node.js version testing

## 📚 API Documentation

When running the backend, visit:

- **Swagger UI**: http://localhost:3001/api/docs
- **Health Check**: http://localhost:3001/api/health

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is private and unlicensed.
