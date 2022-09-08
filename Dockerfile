FROM node:14
WORKDIR /app
COPY package*.json 6080.js ./
RUN npm install
CMD ["node", "6080.js"]
