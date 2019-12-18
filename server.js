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

//Handle production stuff
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}

//Routes
const wedstrijdenRouter = require('./routes/wedstrijden');
app.use('/api/wedstrijden', wedstrijdenRouter);


//Declare app started
app.listen(5000, () => console.log('server started'));