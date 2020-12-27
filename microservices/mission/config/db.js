const {Pool} = require('pg');
const {DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, DB_CONNECTION_LIMIT, DB_HOST} = process.env;

const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT,
    max: DB_CONNECTION_LIMIT
});

module.exports = pool;