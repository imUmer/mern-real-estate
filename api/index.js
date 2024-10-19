import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.LOCALDB).then(()=>{
    console.log('con')
}).catch(()=>{
    console.log('haha');
    
})

const app = express()

app.listen( 3000, ()=>{
    console.log('app is runnning on port 3000!');
})