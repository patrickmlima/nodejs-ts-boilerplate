FROM node

LABEL maintaner="Patrick Lima <patrickm.lima1@gmail.com"

ENV NODE_ENV=production

COPY ./ /usr/src/app

WORKDIR /usr/src/app

RUN npm install --production=false
# build application with webpack
RUN npm run build

# remove devDependencies
RUN npm prune
# remove files outside of 'build' folder
RUN rm -rf src api-docs
RUN rm -f package.json \
package-lock.json \
LICENSE \
tsconfig.json \
webpack.config.js
RUN cp -a build/. ./

EXPOSE 3000

CMD [ "node", "index.js" ]