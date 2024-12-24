# NestJS + React boilerplate

Boilerplate for a modern web application built with a React frontend and NestJS backend. Local development with Docker.

## 🛠️ Development Setup

### Prerequisites

- Node.js 22+
- Docker and Docker Compose
- npm

### Running with Docker (Recommended)

1. Clone the repository
2. Start the application using Docker Compose:
   ```bash
   docker compose up
   ```
3. Access the applications:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3000

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

3. Start the development server:
   ```bash
   npm run start:dev
   ```

The backend will be available at http://localhost:3000

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
