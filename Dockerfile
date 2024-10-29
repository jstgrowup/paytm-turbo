FROM node:20.12.0-alpine3.19

WORKDIR /usr/src/app

# Copy all configuration files first
COPY package*.json ./
COPY turbo.json ./
COPY tsconfig.json ./

# Create necessary directories
RUN mkdir -p apps packages

# Copy workspace configurations and package.json files
COPY packages/typescript-config/ ./packages/typescript-config/
COPY apps/*/package.json ./apps/
COPY packages/*/package.json ./packages/

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Generate Prisma client if needed
RUN npm run db:generate

# Build typescript-config package first
RUN npx turbo run build --filter=@repo/typescript-config

# Build UI package
RUN npx turbo run build --filter=@repo/ui

# Build user app
RUN npx turbo run build --filter=user-app

CMD ["npm", "run", "start-user-app"]