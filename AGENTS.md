# Repository Guidelines

## Project Structure

`src/` contains the React application. Key areas:

- `src/App.jsx` and `src/main.jsx` wire the router, providers, and layouts.
- `src/pages/` holds route-level screens (for example `Login.jsx`, `AdminPatients.jsx`).
- `src/components/` holds reusable UI pieces, with `src/components/ui/` for shared primitives.
- `src/layout/` contains layout shells for auth and admin routes.
- `src/context/` defines providers for auth and patients state.
- `src/hooks/` contains custom hooks named `use*`.
- `src/helpers/` contains small utilities.
- `src/config/axios.jsx` configures the API client.
- Global styles live in `src/index.css`.

## Build, Test, and Development Commands

Use `pnpm` (lockfile: `pnpm-lock.yaml`).

- `pnpm dev` starts the Vite dev server.
- `pnpm build` produces a production build.
- `pnpm preview` serves the production build locally.
- `pnpm lint` runs `oxlint`.
- `pnpm lint:fix` auto-fixes lint issues where possible.
- `pnpm fmt` formats with `oxfmt`.
- `pnpm fmt:check` checks formatting without writing.

## Coding Style & Naming

- Indentation is 2 spaces; JSX uses single quotes.
- Components are `PascalCase` (for example `Patient.jsx`) and `default` exported.
- Hooks are `useCamelCase` (for example `useLogin.jsx`) and named exported.
- Helpers are `camelCase` (for example `formatDate.js`) and named exported.
- Use the `@` alias for `src` imports (configured in `vite.config.js`).

## Testing Guidelines

No test framework or test files are currently present. If you add tests, prefer colocating them near the feature (for example `src/pages/Login.test.jsx`) and document the runner and commands in this file.

## Commit & Pull Request Guidelines

Commit history follows Conventional Commits, commonly `feat:`, `fix:`, `chore:`, and `style:`. Match this pattern and keep messages action-oriented.

No PR template is present. For PRs, include:

- A short summary of changes.
- Links to related issues or tickets.
- Screenshots or screen recordings for UI changes.
- Notes on how you validated changes (commands run or manual checks).

## Configuration Notes

API calls use `VITE_BACKEND_URL` from the Vite environment. Set it in a `.env` file (for example `VITE_BACKEND_URL=https://api.example.com`) before running locally.
