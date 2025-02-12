const express = require('express');
const cors = require('cors')
const app = express();


const authRouter = require('./src/routes/auth.route')


const connectDB = require('./src/config/database');


app.use(cors());

connectDB();


app.use(express.json());


app.use('/api/auth',authRouter);


app.get('/',(req,res)=>{
    res.send("hello world");
})


app.listen(8000,()=>{
    console.log("Server started at 8000")
})