const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');


const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 4000;

const dbUrl = 'mongodb://127.0.0.1:27017/op'

const authRoutes = require("./routes/authR")

const userRoutes = require("./routes/userR")
 

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true}).then((result) => {
 console.log('connection with DB established :)')   
}).catch((err) => {
    console.error(err)
});


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors())
app.get('/', (req, res)=> {
    res.send("<h1>dima sexy ma booooiii </h1>")
});



app.listen(PORT, () => {
    console.log(`Server is running on port  http://localhost:${PORT}`)
})

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
