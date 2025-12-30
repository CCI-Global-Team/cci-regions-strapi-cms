FROM node:20-alpine AS base

WORKDIR /app
COPY . /app

FROM base AS prod-deps
RUN --mount=type=cache,id=yarn,target=/yarn/store yarn install --production

FROM base AS build
RUN --mount=type=cache,id=yarn,target=/yarn/store yarn install
RUN yarn build


FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build

EXPOSE 8080

CMD ["yarn", "start"]
