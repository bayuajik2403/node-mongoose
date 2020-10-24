const mongoose = require('mongoose')
const User = require('./models/User')
const express = require('express');
const app = express();
const port = 8081 || process.env.PORT;


mongoose.connect('mongodb://localhost:27017/mongoose');
mongoose.connection
    .once('open', ()=>console.log('CONNECTED'))
    .on('error', (err)=>{
        console.log(`couldnt connect `, err)
    });

app.post('/users');

// const newUser = new User({
//     firstName : 'Bayu Ajikkkk',
//     lastName : 'Kurniawan',
//     isActive : 1
// });

// newUser.save(function(err,dataSaved){
//     if(err) return err;
//     console.log(`data is saved: `+dataSaved);
// });

//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!!!`))