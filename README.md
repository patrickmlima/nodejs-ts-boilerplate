# NodeJS Typescript Boilerplate

A simple boilerplate to setup projects using NodeJS and Typescript.
It already uses express and sets up Jasmine. Also Webpack build is configured.

## Dependencies

- Node and npm
- Docker
- build-essencial (to use Makefile)

## Installation

Clone this repository and install dependencies.

```shell
npm install
```

create a `.env` file on the root folder based on `.env.example`. In this file you can set your environment variables for both development and production.

After that, you can run this service locally.

```shell
npm run start
```

## Deploy

You can run this project directly on a Docker container.

To do so, you just need to run:
```shell
make deploy
```

It runs tslint to check source code, execute unit tests, build docker image and run a container using that image.
_**Container default port is 3000**_

To check if container is running, just execute:

```shell
docker container ls | grep nodejs-ts-boilerplate
```
