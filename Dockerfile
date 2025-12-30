# --------------------
# Base
# --------------------
FROM node:20-alpine AS base
WORKDIR /app
COPY . /app
ENV NODE_ENV=production

# --------------------
# Dependencies
# --------------------
FROM base AS prod-deps
RUN --mount=type=cache,id=yarn,target=/yarn/store yarn install --production

# --------------------
# Build (admin panel)
# --------------------
FROM base AS build
RUN --mount=type=cache,id=yarn,target=/yarn/store yarn install
RUN yarn build

# --------------------
# Production
# --------------------
FROM base AS prod
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist

EXPOSE 8080

CMD ["yarn", "start"]
