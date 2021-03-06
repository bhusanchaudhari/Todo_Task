const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
require("dotenv").congig();
const app = express()
const userRoute = require('./app/api/routes/users') 
const todoRoute = require('./app/api/routes/todo')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

app.set('secretKey','hdjsakfhdjsk')

const userValidation = (req, res,next) => {
    jwt.verify(req.headers['token'], req.app.get('secretKey'), 
    (err,decoded) =>{
        if(err){
            res.json({
                message: err
            })
        }
        next()
    })
}

app.use(logger('dev'))
app.use(bodyParser.json())
app.use('/user',userRoute)
app.use('/todo',userValidation,todoRoute)
app.get('/', (req,res) => {
    res.json({
        "APP": "JWT Based API Application",
        "message": "Successfully Running the Application"
    })
})
const mongoURI = "mongodb+srv://bhushanexe:bhushan@cluster0.sbnyqbr.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoURI)
.then(() => {
    console.log("Successfully Connected to the Database")
})
.catch((err) => {
    console.log(err)
})

app.listen(process.env.port || 5000,() => {
    console.log("Successfully Running on the PORT: 5000")
})                             