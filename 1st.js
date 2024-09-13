const express=require('express');
const app=express();    
const {connect}=require('./connection');


const logger=require('./middleware');
const mongoose=require('mongoose');
const userRouter=require('./Routes/user');


//connect to mongodb
connect('mongodb://localhost:27017/userdb').then(()=>{
    console.log('Connected to mongodb');
}).catch((err)=>{
    console.log('Connection failed');
});

//middleware
app.use(express.urlencoded({extended:false}));
app.use(logger('log.txt'));


app.use('/users',userRouter);
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});







