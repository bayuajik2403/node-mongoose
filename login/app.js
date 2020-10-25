const express = require('express');
const app = express();
const port = 8081;

const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/login', ()=> console.log("CONNECTED to DB"))


app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!!!`));