const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: 80908090,
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;
// This is a simple configuration
// for connecting to the PostgreSQL database.
// It uses the pg library to create a new Pool object.
// This object contains the database configuration details.
// The module.exports statement at the end of the file exports the pool object so it can be used in other files.