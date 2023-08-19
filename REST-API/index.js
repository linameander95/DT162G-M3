require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');



//Connect to database
mongoose.connect(process.env.DB_CONNECTION)
let db = mongoose.connection;

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

//Middlewares
app.use(cors());
app.use(express.json());
const coursesRoute = require('./routes/courses');
app.use('/courses', coursesRoute);

app.listen(3000, () => console.log("API Server is running..."));