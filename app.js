const mongoose = require('mongoose')
const User = require('./models/User')
const express = require('express');
const bodyParser =require('body-parser');

const app = express();
const port = 8081 || process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/mongoose');
mongoose.connection
    .once('open', ()=>console.log('CONNECTED'))
    .on('error', (err)=>{
        console.log(`couldnt connect `, err)
    });


app.get('/', (req,res)=>{
    res.send('ROOT');
});

app.post('/users',(req, res)=>{
    const newUser = new User({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        isActive : req.body.isActive
    });

    // newUser.save(function(err,dataSaved){
    //     if(err) return err;
    //     console.log(`data is saved: `+dataSaved);
    // });

    newUser.save().then(savedUser=>{
        console.log('saved user')
        res.send('USER SAVED')
    }).catch(err=>{
        res.status(404).send('USER NOT SAVE BECAUSE.....');
    });

});

//get request all data
app.get('/users',(req,res)=>{
    User.find({}).then(users=>{
        res.status(200).send(users);
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!!!`))