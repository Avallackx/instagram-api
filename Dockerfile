FROM node:16-alpine

ENV NODE_ENV development

RUN apk --no-cache add postgresql-client
RUN apk add --no-cache --virtual .gyp python3 make g++ git
RUN npm install -g @nestjs/cli

USER node
WORKDIR /home/node

RUN mkdir -p node_modules \
    && chown -R node node_modules 

COPY --chown=node:node . .
