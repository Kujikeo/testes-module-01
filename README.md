
## Getting Started

First, run the project with docker. Its facility, run the next command in your console:

```bash
docker-compose up
```

Open [http://localhost:3333](http://localhost:3333).

You can test in your browser or using the program like postman or insomnia.

## COLLECTIONS POSTMAN
in project have a fie to postman collection.

[API ROUTES]
### Calculate
api to calculate the number of cans ant tint
```bash
   POST /calculate
```
### List walls calculated
api to calculate all walls calculated.
```bash
   GET /calculate
```

[SWAGGER]
To viu SWAGGER, open the [http://localhost:3333/api-docs]

[Test]
to run test unit, just run in console yarn test.



### Considerações:
Não fiz frontend porque não é algo que curto muito fazer.Não usei um ORM por motivos de não haver necessidade de armazenar algo sem muito relacionamento, então armazenei em memoria mesmo. 

