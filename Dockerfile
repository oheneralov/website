
FROM node:16-alpine AS deps

#RUN addgroup --system --gid 1001 nodejs
#RUN adduser --system --uid 1001 nextjs

#USER nextjs

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY . ./
RUN  npm install
RUN npm run build

ENV NEXT_TELEMETRY_DISABLED 1

#ENV NODE_ENV production

EXPOSE 8080

ENV PORT 8080

RUN ls -la

CMD ["npm", "start"]
