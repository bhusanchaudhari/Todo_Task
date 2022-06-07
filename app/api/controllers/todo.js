const TodoModel = require('../models/todo')

const createTodo = (req,res,next) => {
    let {task,task_date} = req.body
    TodoModel.create({
        task,
        task_date
    }, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Added Todo Successfully"
        })
    })
}
const readAllTodo = (req,res,next) => {
    TodoModel.find({}, (err,result) => {
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved all the Tasks",
            data:{
                todo: result
            }
        })
    })
} 

const readTodoById = (req,res,next) => {
    TodoModel.findById(req.params.id, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved all Tasks By ID",
            data:{
                task: result
            }
        })
    })
} 
const updateTodoById = (req,res,next) => {
    TodoModel.findByIdAndUpdate(req.params.id,req.body,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Updated Task By ID",
            data:{
                todo: result
            }
        })
    })
} 

const deleteTodoById = (req,res,next) => {
    TodoModel.findByIdAndRemove(req.params.id,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted Task By ID",
            data:{
                todo: result
            }
        })
    })
} 

module.exports = {createTodo, readAllTodo, readTodoById, updateTodoById, deleteTodoById}