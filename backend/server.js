import express from "express";
import 'dotenv/config';

import commentRoutes from "./routes/comments.routes.js" 
import connectToMongodb from "./db/connectToMongodb.js";

const app = express();
const PORT = process.env.PORT;

app.get('/',(req,res)=>{
    res.send(`This is the Backend running in  ${PORT}`)
})

app.use('/api',commentRoutes)

app.listen(PORT,()=>{
    connectToMongodb();
    console.log("Connected to Backend ! ")
})




