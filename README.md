# NestJS + React boilerplate

Boilerplate for a modern web application. Ready to use locally and deploy to production, batteries included.

### Tools

- NestJS
- React
- Redux and RTKQ
- PostgreSQL
- MikroORM
- Docker
- TailwindCSS and Shadcn/UI
- TypeScript
- Configured remote debugging support for backend via Chrome devtools / VSCode
- Hot reload for both the frontend and backend

## 🛠️ Development Setup

### Prerequisites

- Node.js 22+
- Docker and Docker Compose
- npm

### Setup the environment variables

- `.env.postgres.development`: PostgreSQL database connection settings
- `.env.pgadmin.development`: pgAdmin web interface credentials
- `backend/.env.development`: Backend API configuration and database connection
- `client/.env.development`: Frontend API endpoint configuration

No additional configuration is needed as the example files are pre-configured with development defaults. Remove the `.example` suffix from the files and you're ready to go

### Running with Docker (Recommended)

1. Clone the repository
2. Start the application using Docker Compose. This will setup your frontend, backend, database, and pgAdmin containers:
   ```bash
   docker compose build
   docker compose up
   ```
3. Create and run migrations via the docker container
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

3. Create and run migrations (assuming you have a PostgreSQL database running):

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
