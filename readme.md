# VUTTR

This is a simple api with a simple jwt authentication that allows to manage tools with its name, url, description and tags.
Demo : https://vuttrf.herokuapp.com/

## Getting started

https://vuttr4.docs.apiary.io/

## How to use

### Normal mode

Download or clone and choose one of the following options:

#### To initialize and install

```bash
yarn init --yes
yarn install
```

#### To start the api in dev

```bash
yarn dev
```

#### To start the api in production

```bash
yarn start
```
### Docker mode

#### To initialize and run

```bash
docker pull sharkst/vuttr
docker run -p 3000:3000 -d sharkst/vuttr
```

#### Or you may download or git clone then inside the folder:

```bash
docker-compose up
```

## Testing 

### Visual test mode

```bash
yarn cypress open
```

### To CLI test mode

- Individual file
```bash
yarn cypress run  --spec "cypress/integration/testes/example.spec.js" 
```

- All test files
```bash
yarn cypress run 
```


