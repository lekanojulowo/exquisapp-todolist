const promise = require('bluebird');

const options = {
  // Initialization Options
  promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = "postgres://postgres:reader@localhost:5432/exquisapptodo";
const db = pgp(connectionString);

module.exports = db;