const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mongoose');
mongoose.connection
    .once('open', ()=>console.log('CONNECTED'))
    .on('error', (err)=>{
        console.log(`couldnt connect `, err)
    });

