# AI Setup Prompt: Monorepo with React PWA + NestJS Backend + Drizzle + Turso

Create a **monorepo project** using **PNPM workspaces** with two applications and one shared package. The goal is to scaffold the **entire stack** without implementing application-specific logic.

---

## 1️⃣ Frontend (React PWA)

- **Folder:** `/apps/web`
- **Tech:** React + TypeScript + TailwindCSS
- **Setup includes:**
- React Query
- shadcn/ui
- PWA offline support and push notifications

## 2️⃣ Backend (NestJS API)

- **Folder:** `/apps/api`
- **Tech:** NestJS + TypeScript
- **Database:** Turso (SQLite cloud provider)
- **ORM:** Drizzle
- **Setup includes:**
- Database connection
- Migrations
- API routes folder structure

## 3️⃣ Shared Package

- **Folder:** `/packages/shared`
- TypeScript types/interfaces shared between frontend and backend

---

## Goal

After completing these steps, the monorepo should include:

- A React PWA frontend ready for offline support and push notifications
- A NestJS backend with Drizzle connected to Turso
- A shared TypeScript package
- Linting, formatting, and initial GitHub Actions workflow

---

## Step-by-Step Plan for Initial Setup

### Step 1: Initialize Monorepo

- Create a new PNPM workspace project
- Setup `package.json` with workspaces pointing to:
  apps/_
  packages/_

markdown
Copy code

- Initialize ESLint, Prettier, and TypeScript configuration for the repo

### Step 2: Create Frontend Application

- Create a new React project in `/apps/web` with TypeScript
- Install **TailwindCSS** and configure it
- Install **shadcn/ui** for future components
- Install **React Query**
- Configure PWA features:
- Service worker for offline caching
- Manifest file for add-to-home-screen support
- Push notification scaffolding

### Step 3: Create Backend Application

- Create a new NestJS project in `/apps/api` with TypeScript
- Install **Drizzle ORM** and setup connection to **Turso**
- Configure database scaffolding:
- Connection to Turso
- Basic migration setup
- Initialize tables folder or schema definitions
- Setup API routes folder structure for future endpoints

### Step 4: Create Shared Package

- Create `/packages/shared` for TypeScript types and interfaces
- Configure `tsconfig.json` path mapping so both frontend and backend can reference shared types
- Add placeholder type definitions for later use

### Step 5: Integrate Linting and Formatting

- Ensure ESLint + Prettier configuration works for frontend, backend, and shared packages
- Add scripts to run linting and formatting checks

### Step 6: Setup CI/CD

- Create GitHub Actions workflow
- On pull requests or pushes to `main`:
- Build frontend and backend
- Run frontend and backend tests
- Check linting

---
