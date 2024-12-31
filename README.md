# NestJS + React boilerplate

Boilerplate for a modern web application. Easy to setup locally and deploy to production.

### Tools

- NestJS
- React
- Redux and RTKQ
- PostgreSQL
- MikroORM
- Docker
- TailwindCSS
- Shadcn/UI
- TypeScript
- Backend remotely debuggable via Chrome DevTools, VSCode, etc.

## 🛠️ Development Setup

### Prerequisites

- Node.js 22+
- Docker and Docker Compose
- npm

### Running with Docker (Recommended)

1. Clone the repository
2. Start the application using Docker Compose:
   ```bash
   docker compose build
   docker compose up
   ```
3. Create and run migrations (assuming you have a PostgreSQL database running):
   ```bash
   docker compose run backend npm run migration:create
   docker compose run backend npm run migration:up
   ```
4. Access the applications:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3000/api

### Running Without Docker

#### Backend (NestJS)

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create and run migrations:

   ```bash
   npm run migration:create
   npm run migration:up
   ```

4. Start the development server:
   ```bash
   npm run start:dev
   ```

The backend will be available at http://localhost:3000/api

#### Frontend (React)

1. Navigate to the frontend directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at http://localhost:5173
