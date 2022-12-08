const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');


//Connect to database
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECTION, { useMongoClient: true }, () =>
console.log('Connected to database')
);
let db = mongoose.connection;
mongoose.Promise = global.Promise;

//Middlewares
app.use(cors());
app.use(express.json());

//import routes
const coursesRoute = require('./routes/courses');

app.use('/courses', coursesRoute);


app.listen(3000, () => console.log("API Server is running..."));