const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');



const dbUrl = 'mongodb://127.0.0.1:27017/pips';

const UserRouter = require('./routes/user')
const AuthRouter = require('./routes/auth')

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => console.log('DB Connection establiched !')
).catch(err => console.error(err));

const app = express();

app.get('/', (req, res) => {
    res.send( "<h1>sexy dima </h1>");
  });

  

app.use(morgan('dev'));

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(cors());





const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Slave is running port ${PORT}`)

});


app.use('/api/user', UserRouter);
app.use('/api', AuthRouter);


