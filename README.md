# gRPC_Demo
Demo and implement gRPC, GraphQL and Rest in Microservices Architecture


```
npx autocannon http://localhost:8000/orders/grpc -t 10 -c 2000 -l
npx autocannon http://localhost:8000/orders/rest -t 10 -c 2000 -l
npx autocannon http://localhost:8000/orders/graphql -t 10 -c 2000 -l
```