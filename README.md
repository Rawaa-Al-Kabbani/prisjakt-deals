# Prisjakt deals

![This is what the homepage looks like.](https://github.com/Rawaa-Al-Kabbani/prisjakt-deals/blob/main/preview/prisjakt-deals.png?raw=true)

This is a web app that uses the Prisjakt API for finding deals.

It is written in React.js, Material-UI, TypeScript, Node.js, Express, Docker and Jest.

# Running the web application

You can run the web application either locally in your computer or inside a Docker container.

## Running it locally

To run it locally simply run `npm run start`.

It will start on http://localhost:5000 by default.

You can change the port by setting the `PORT` environment variable: `PORT=3000 npm run start`

## Running it with Docker

To run it with Docker via docker-compose simply run `docker-compose up --build`.

It will start on http://localhost:5000 by default.

You can change the port the web application is exposed on the docker-compose.yml file.

# Running the tests

To run the tests first make sure you have installed the dependencies with `npm install` and then simply run `npm run test`. The tests are run with Jest.
