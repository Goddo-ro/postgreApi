const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'my_user',
    password: 'root',
    host: 'localhost',
    port: 5432,
    database: 'my_database'
});

module.exports = pool;