FROM node:22-alpine

WORKDIR /app

COPY package*.json package-lock.json* tsconfig.json ./

RUN npm install

COPY . .

RUN npx prisma generate


RUN npm run build

EXPOSE 3333

CMD ["npm", "run", "start"]