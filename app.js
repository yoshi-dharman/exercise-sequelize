const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// const cors = require('cors');

const sequelize = require('./config/db');
const Todo = require('./models/todo.model');
const User = require('./models/user.model');
const routes = require('./routes');

// app.use(cors());
app.use(express.json());
app.use(routes);


async function testConnection () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await User.sync({alter: true});
        await Todo.sync({alter: true});
        console.log("All model were synchronized successfully");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
testConnection();

app.listen(PORT, ()=>{
    console.log("server running at ", PORT);
});