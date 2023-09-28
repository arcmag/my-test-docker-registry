FROM node:20-alpine
WORKDIR /src

RUN npm i express
ADD index.js ./

CMD ["node", "/src/index.js"]
