FROM node:20.12.0-alpine3.19

# Set the working directory to the project root
WORKDIR /usr/src/app
COPY package.json package-lock.json turbo.json tsconfig.json ./
COPY apps ./apps
COPY packages ./packages
RUN npm install
RUN npm run db:generate
RUN npm run build
# Start the user app
CMD ["npm", "run", "start-user-app"]
