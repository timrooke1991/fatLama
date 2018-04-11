const sqlite3 = require('sqlite3').verbose();
const file    = './db/fatlama.sqlite3';
const db      = new sqlite3.Database(file);

module.exports = db;