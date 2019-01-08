# Application-API 2018 by Niels Vinke
IoT application course.
API for final assignment

## Prerequisites
* [Node](https://nodejs.org/en/)
* [Knex](https://www.npmjs.com/package/knex): >= 0.12.9

## Configurations

For Using this API you need to do the following parts first.

* Setup a database. This can be for example Postgres or Mysql
* Fill in the values and credentials for the database in the knexfile.js
* Before running the project please make sure you run all migrations:

```
knex migrate:latest
```

## Setup

```
npm install
```

### Starts the server
```
npm start
```