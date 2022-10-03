const fs=require('fs');
const express=require('express');
const app=express();

app.get('/users', (req,res)=>{
    fs.readFile('data/useres.json', (err,data)=>{
        if (err) {
            res.send(err)
        }else{
            res.send(data)
        }
    });
});

app.listen(8081, ()=>{
    console.log(`életjel`);
});