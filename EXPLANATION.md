# Project Explanation

This document provides a comprehensive overview of the ShopSmart project setup, as required.

## 1. Architecture
- **Frontend (Client)**: Built with **React** via Vite. The frontend application fetches data from the backend APIs, handles component-based UI rendering, and manages client-side routing.
- **Backend (Server)**: A **Node.js** and **Express** application. It serves as the API layer, responding to frontend requests natively.
- **Testing Layers**:
  - **Unit Testing**: Jest (Backend) and Vitest (Frontend).
  - **Integration Testing**: Jest and Supertest interacting with Express routes.
  - **E2E Testing**: Playwright orchestrates a real browser session across the full stack.

## 2. CI/CD Workflow
- **Continuous Integration**: We use **GitHub Actions** (`.github/workflows/ci.yml`) to automatically install dependencies, run code linters (ESLint), and execute our test runners on every `push` and `pull_request` to the main branch. This creates a PR check that blocks merging bad code.
- **Dependabot**: Configured in `.github/dependabot.yml` to routinely search `npm` package registries for updates and automatically open Pull Requests to keep both `/client` and `/server` dependencies secure.
- **Continuous Deployment**: A second GitHub Actions workflow (`deploy.yml`) is triggered on a `push` to `main`. It uses an SSH action to connect to an AWS EC2 instance and run pull/build/restart commands automatically.

## 3. Design Decisions
- **Idempotency in Scripts**: Shell scripts like `safe_ec2_control.sh` were crafted to be idempotent. For example, checking if the server is already running or stopped before trying to execute state changes, ensuring `start`/`stop`/`restart` commands can run safely multiple times.
- **Testing Approach**: Splitting unit/integration frameworks between frontend and backend allows for the most natural testing environment for each library (Node vs JSDOM). E2E takes a black-box approach ensuring true user flows work.
- **Monorepo Setup**: Using a unified repository with `client` and `server` folders ensures atomic commits, satisfying the need for logical Git changes that represent holistic feature drops.

## 4. Challenges Addressed
- **Linting Inconsistencies**: Setting up ESLint v9 flat config for the backend while maintaining the legacy configuration in the Vite React frontend required specific configuration handling (`eslint.config.mjs` vs `.eslintrc.cjs` compat).
- **Synchronized Testing**: Orchestrating the frontend and backend to boot up concurrently during Playwright testing without port conflict issues was resolved natively through the `playwright.config.ts` explicit `webServer` arrays.
- **AWS Permissions via CI**: Bridging GitHub Actions to our EC2 required managing secrets mapping and safely invoking scripts with varying permissions. Using `appleboy/ssh-action` encapsulated this cleanly.

---

*This setup ensures a robust, fully automated, and resilient development lifecycle natively aligned with industry best practices.*
