const express =require('express')
const bodyParser = require('body-parser')
const cors=require('cors')
const app=express();
require('./server/config/db')
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:5200'}))

const apiRoutes=require('./server/Routes/userRoutes');

app.use('/api',apiRoutes) 
// app.use(express.json());
const port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})