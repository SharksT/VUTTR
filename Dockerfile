FROM cypress/base:10

WORKDIR /usr/app

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm" , "start"]