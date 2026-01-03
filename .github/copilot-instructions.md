# Copilot Instructions for Artha Pay UI

## Project Overview
- **Artha Pay** is a React (v18+) cryptocurrency platform for buying, selling, vault management (fiat/crypto), bank accounts, invoices, and batch payouts.
- Built with Vite, Redux Toolkit, Ant Design, Tailwind CSS, and modular feature directories.

## Architecture & Patterns
- **src/core/**: Core logic, HTTP clients (with apisauce), authentication, layout, shared utilities.
- **src/modules/**: Feature modules (e.g., banks, cards, wallets, payments, etc.), each with their own UI, services, and sometimes local state.
- **src/reducers/** & **src/store/**: Redux Toolkit slices and store configuration. Use `createSlice` and `createAsyncThunk` for async logic.
- **src/hooks/**: Custom React hooks for cross-cutting concerns.
- **src/utils/**: Utility functions, validators, and helpers.
- **public/locales/**: i18n translation files (ar, ch, en, ma).

## API & Data Flow
- API endpoints are configured via environment variables (`VITE_API_URL`, etc.) and accessed via `window.runtimeConfig`.
- HTTP clients in `core/httpClients.js` use apisauce, with interceptors for auth tokens from Redux state.
- Each module has its own `httpServices.js` for API calls, using the shared client and accepting `onSuccess`/`onError` callbacks.

## State Management
- Use Redux Toolkit for global state (see `reducers/` and `store/`).
- Organize state by feature slice. Use `createAsyncThunk` for async actions.
- Use React Context only for local, non-global state (e.g., theming).

## Routing
- Uses React Router v7 with `createBrowserRouter` (see `AppRoutes.jsx`).
- Centralize route definitions and use `ProtectedRoute` for auth-guarded pages.

## Styling
- Tailwind CSS is the primary styling method. Use utility classes in JSX.
- For custom styles, use `index.css` and follow the `custom-*` naming convention.
- SVG icons are managed via background-position in CSS, with coordinates in `src/assets/images`.

## Error Handling
- Use React Router's `errorElement` for route-level error boundaries.
- Use `try...catch` for async logic and API calls. Extract user-friendly messages with `deriveErrorMessage` (see `core/shared/deriveErrorMessage.js`).

## Developer Workflows
- **Install:** `npm install --force`
- **Dev build:** `npm run build:dev`
- **Test build:** `npm run build:testing`
- **Prod build:** `npm run build:prod`
- **.env files:** Copy from `.env.example` and set `VITE_`-prefixed vars for each environment.

## Conventions
- Component files: PascalCase (`AccountSummary.jsx`).
- Use `.jsx` for components, `.js` for logic/utilities.
- Feature branches: `feature/<description>` (e.g., `feature/user-profile`).
- Centralize validation in `core/shared/validations.js`.

## Security
- Auth handled via Auth0 (see `core/authentication/`).
- Always validate/sanitize input using shared validators.
- Never commit secrets to the repo; use `.env` files.

## Examples
- See `core/httpClients.js` and `modules/*/httpServices.js` for API patterns.
- See `reducers/` for Redux slice structure.
- See `public/locales/` for i18n structure.

---
For unclear or missing patterns, consult `README.md` or ask for clarification.
