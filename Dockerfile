FROM node:14.15.4
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["node", "server/server.js"]
