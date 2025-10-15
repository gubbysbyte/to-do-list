// logic for all the handling requests (what to do)
const Todo = require('../models/todoModel');

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

const createTodo = async(req, res) => {
    try{
        if(!req.body.task){
            return res.status(400).json({message: 'Task is required'});
        }
        const newTodo = await Todo.create({
            task: req.body.task,
        })

        res.status(201).json(newTodo);
    }
    catch(error){
        res.status(500).json({message: 'Server Error', error: error.message});
    }
}

const getTodoById = async(req, res) => {
    try {
        // Find a document by its ID from the request parameters
        const todo = await Todo.findById(req.params.id);

        if (todo) {
            res.status(200).json(todo);
        } else {
            // If no document is found, return a 404 error
            return res.status(404).json({ message: 'To-do not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

const updateTodo = async(req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if(!todo){
            return res.status(404).json({message: 'To-do not found'});
        }
        const updateTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators: true}
        );
        res.status(200).json(updateTodo);
    } catch (error) {
        res.status(500).json({message: 'Server Error', error: error.message});
    }
};

const deleteTodo = async(req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);

        if(!todo){
            res.status(404).json({message: 'To-do not found'});
        }
        else{
            res.status(200).json({message: 'To-do deleted'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

// tick
// app.post("/todos", async (req, res) => {}) 

// app.put("/todos/:id", (req, res) => {}) 

// app.delete("/todos/:id", (req, res) => {}) 

module.exports = {getTodoById, getTodos, updateTodo, createTodo, deleteTodo};
