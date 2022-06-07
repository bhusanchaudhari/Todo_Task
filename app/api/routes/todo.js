const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo')
const { create } = require('../models/todo')

router.post('/create',todoController.createTodo)

router.get('/getAllTodo',todoController.readAllTodo)

router.get('/getTodoById/:id',todoController.readTodoById)

router.put('/updateTodoById/:id',todoController.updateTodoById)

router.delete('/deleteTodoById/:id',todoController.deleteTodoById)

module.exports = router