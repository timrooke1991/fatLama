const port  = process.env.PORT || 3000;
const env   = process.env.NODE_ENV || 'development';
const dbURI = '../db/fatlama.sqlite3';

module.exports = { port, env, dbURI };
