require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Database connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

//Make server handle JSON properly
app.use(express.json());

//Routes
const wedstrijdenRouter = require('./routes/wedstrijden');
app.use('/wedstrijden', wedstrijdenRouter);


//Declare app started
app.listen(5000, () => console.log('server started'));