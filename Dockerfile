FROM node:lts-alpine
WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . ./
EXPOSE 3000
ENV HOST=0.0.0.0
CMD ["npm", "start"]