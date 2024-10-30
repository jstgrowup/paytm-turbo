FROM node:18.18.0-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json turbo.json tsconfig.json ./
COPY apps ./apps
COPY packages ./packages
RUN npm install
RUN npm run db:generate
RUN npm run build
CMD [ "npm","run","start-user-app" ]