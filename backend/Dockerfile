FROM node:22 AS base
WORKDIR /usr/local/app

# Stage: backend-base
FROM base AS backend-base
COPY package.json package-lock.json ./

# Stage: backend-dev
FROM backend-base AS backend-dev
RUN --mount=type=cache,id=npm,target=/root/.npm \
    npm ci
EXPOSE 9229
CMD ["npm", "run", "start:debug"]

# Stage: backend-prod
FROM backend-base AS backend-prod
COPY . .
RUN --mount=type=cache,id=npm,target=/root/.npm \
    npm ci && \
    npm run build
EXPOSE 3000
CMD ["node", "dist/main.js"]
