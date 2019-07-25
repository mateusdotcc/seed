## Setup

Clone this repo to your desktop and run `npm i` to install all the dependencies.

### Installations

- [Yarn](https://yarnpkg.com/lang/en/docs/install/)
- [Docker](https://docs.docker.com/install/)
- [Robo 3T](https://robomongo.org/download)
- [Insomnia](https://insomnia.rest/download)

---

## Docker

```bash
docker pull mongo
docker run --name mongodb -p 27017:27017 -d mongo
docker ps
```

---

## Run

```bash
yarn start
```
