const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
const studentRoute = require('./route/route')
const connectDB = require('./config/db')

app.use(express.json())
dotenv.config()

//route
app.use('/api/student',studentRoute)

app.listen(5003,()=>{
    console.log("server running")
})