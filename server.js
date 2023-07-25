const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}))

mongoose.connect('mongodb+srv://Subhasini:Hello123@cluster0.dnbrbv5.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error',(error) =>  console.log(error));
db.once('open' , () => console.log('Connected to Database'));
const quoteRouter = require('./routes/quote');
app.use('/quote' , quoteRouter);

app.use('/' , (req,res) => {
    res.send('Hello World');
});


app.listen(5050, () => console.log('Server started on port 5050'));