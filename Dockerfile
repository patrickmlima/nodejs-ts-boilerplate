FROM node

LABEL maintaner="Patrick Lima <patrickm.lima1@gmail.com"

ENV NODE_ENV=production

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install

RUN cp -a build/. ./
RUN rm -rf build

EXPOSE 3000

CMD [ "node", "index.js" ]