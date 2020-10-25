const express = require('express');
const app = express();
const port = 8081;
const bodyParser = require('body-parser');
const bcryptjs = require('bcryptjs');

const mongoose =require('mongoose');
mongoose.Promise = global.Promise;
const User = require('./models/User');
mongoose.connect('mongodb://localhost/login', ()=> console.log("CONNECTED to DB"))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//app.get('/', (req, res) => res.send('Hello World!'));
app.post('/register',(req,res)=>{
    const newUser= new User();
    newUser.email = req.body.email;
    newUser.password = req.body.password;

    bcryptjs.genSalt(10, (err,salt)=>{
        
        bcryptjs.hash(newUser.password,salt,(err,hash)=>{
            
            if(err) return err;
            newUser.password = hash;

            newUser.save().then(userSaved=>{
                res.send("USER IS SAVED");
            }).catch(err=>{
                console.log(err);
                res.send("USER NOT SAVED " + err)
            });

        });

    });

    res.send(newUser);
  
});

app.post('/login',(req,res)=>{
    User.findOne({email=req.body.email}).then(user=>{
        if(user){
            bcryptjs.compare(req.body.password, user.password,(err,matched)=>{
                
                if(err) return err;

                if (matched){
                    res.send('WAS ABLE TO LOGIN')
                } else {
                    res.send('NOT ABLE TO LOGIN')
                }
            });
        }
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!!!`));