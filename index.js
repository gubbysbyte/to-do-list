const express = require('express');
// const Todo = require('./models/todoModel.js');
require('dotenv').config();
const connectDB = require('./config/db.js');

connectDB();

const app = express();
app.use(express.json());

// Defines routes
app.use('/api/todos', require('./routes/todoRoute.js')); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))