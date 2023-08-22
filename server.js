const express = require('express');

const mongoose = require('mongoose');


const morgan = require('morgan');

const dbUrl = 'mongodb://127.0.0.1:27017/pips';

const UserRouter = require('./routes/user')

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => console.log('DB Connection establiched !')
).catch(err => console.error(err));

const app = express();

const path = require('path')

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
  

app.use(morgan('dev'));

app.use(express.urlencoded({extended: true}));

app.use(express.json());

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`Slave is running port ${PORT}`)

});


app.use('/api/user', UserRouter);

