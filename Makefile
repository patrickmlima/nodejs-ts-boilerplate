init:
	npm install

test:
	npm run lint;
	npm run test

build:
	npm run build;

deploy: test build
	docker image build -t nodejs-ts-boilerplate:latest .
	docker container run -d --name nodejs-ts-boilerplate -p 3000:3000 nodejs-ts-boilerplate:latest
