const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true, // the task is mandatory
    },
    completed: {
        type: Boolean,
        default: false, // default to not completed
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Todo', todoSchema);