const mongoose = require('mongoose')
//Mongoose Database
const TodoSchema = new mongoose.Schema({
    task:{
        type:String, 
        required: true
    },
    task_date:{
        type:Date, 
        required:true
    }
})

module.exports = mongoose.model('todo',TodoSchema)