const express = require('express');
const app= express();
const mysql=require('mysql');

const cors=require("cors");
app.use(cors());

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: 'Password',
    database : 'homeassist'
});


// db.connect((err)=>{
//     (err) ? console.log (err) : console.log("connected");
// })

app.use(express.json());

app.get('/',(req,res)=>{
  res.send("hello");
});

app.get('/citynames',(req,res)=>{
    db.query("SELECT DISTINCT city FROM final",(err,result)=>{
        (err)? console.log(err): res.send(result)
    })
});
app.get('/survices',(req,res)=>{
    const city=req.query.city;
    db.query("SELECT DISTINCT work, discription, img FROM final WHERE city=?",[city], (err,result)=>{
        (err)? console.log(err): res.send(result)
    });
});
app.get('/contacts',(req,res)=>{
    const service=req.query.service;
    
    db.query("SELECT name,gender,contact FROM final WHERE work=?",[service], (err,result)=>{
        (err)? console.log(err): res.send(result)
    });
});

 
//data store from react   
app.post('/api',(req,res)=>{
    console.log(req.body.inputDataa);  
     var   name=req.body.inputDataa.name
    var  city=req.body.inputDataa.city
    var  work=req.body.inputDataa.work
    var  gender=req.body.inputDataa.gender
    var  contact=req.body.inputDataa.contact
    var discription=req.body.inputDataa.discription
    var img=req.body.inputDataa.img
    db.query("INSERT INTO final(name,city,work,gender,contact,discription,img) VALUES(?,?,?,?,?,?,?)",[name,city,work,gender,contact,discription,img],(err,result)=>{
       (err)?console.log(err) : res.send ("values insterted");
   });
})


const port=process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`app started on port ${port}`);
});  