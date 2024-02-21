FROM node:latest as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run relay

ENV NEXT_PUBLIC_RELAY_ENDPOINT=https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev/

RUN npm run build

FROM node:latest

WORKDIR /app

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]
