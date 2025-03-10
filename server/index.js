const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a todo
app.post("/todos ", async (req, res) => {
    try {
        console.log(req.body);
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//get all todos

//get a todo

//update a todo

// delete a todo


app.listen(5000, () => {
    console.log("server is listening on port 5000");
});
// The server is set up to listen on port 5000. When the server is started, it will log a message to the console indicating that it is listening on port 5000. The server will remain running until it is stopped manually. 

