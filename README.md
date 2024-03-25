<h1 align="center">Welcome to API Architecture Styles 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/huynguyen22994/API_Architecture_Styles_Demo#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> Demo and implement gRPC, GraphQL and Rest in Microservices Architecture

## Install

```sh
npm install
```

Go to /packages/api-gateway
```sh
npm install
```

Go to /packages/order-service
```sh
npm install
```
## Usage
Build

```sh
npm run build
```

Start

```sh
npm run start:pm2
```

## Run tests

Benchmarking gRPC

```sh
npx autocannon http://localhost:8000/orders/grpc -t 10 -c 2000 -l
```

Benchmarking Rest

```sh
npx autocannon http://localhost:8000/orders/rest -t 10 -c 2000 -l
```

Benchmarking GraphQL

```sh
npx autocannon http://localhost:8000/orders/graphql -t 10 -c 2000 -l
```

## Author

👤 **Huy Nguyen**

* Website: https://huynguyen22994.github.io/resume
* Github: [@huynguyen22994](https://github.com/huynguyen22994)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_