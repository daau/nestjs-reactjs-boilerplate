FROM node:22 AS base
WORKDIR /usr/local/app

# Stage: client-base
FROM base AS client-base
COPY package*.json ./
RUN --mount=type=cache,id=npm,target=/root/.npm \
    npm ci
COPY . .

# Stage: client-dev
FROM client-base AS client-dev
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
