const mongoose = require('mongoose')
const User = require('./models/User')

mongoose.connect('mongodb://localhost:27017/mongoose');
mongoose.connection
    .once('open', ()=>console.log('CONNECTED'))
    .on('error', (err)=>{
        console.log(`couldnt connect `, err)
    });

const newUser = new User({
    firstName : 'Bayu Aji',
    lastName : 'Kurniawan',
    isActive : 1
});

newUser.save(function(err,dataSaved){
    if(err) return err;
    console.log(`data is saved:`+dataSaved);
});