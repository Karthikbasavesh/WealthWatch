const mongoose=require('mongoose')
require('dotenv').config();

const url=process.env.MongoDB_url

mongoose.connect(url)
mongoose.connection.on('connected',()=>
{
    console.log("Connected to your mongoDB")
})
mongoose.connection.on('error',(err)=>
{
    console.log(err)
})