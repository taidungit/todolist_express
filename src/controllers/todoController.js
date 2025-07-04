const Todo = require('../models/todo');

// Lấy tất cả Todos từ MongoDB
exports.getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    next(err);
  }
};

// Tạo Todo mới
exports.createTodo = async (req, res, next) => {
  try {
    const { text } = req.body;
    const newTodo = new Todo({ title: text, completed: false });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    next(err);
  }
};

// Đánh dấu Todo hoàn thành
exports.markTodoCompleted = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    todo.completed = true;
    await todo.save();
    res.json(todo);
  } catch (err) {
    next(err);
  }
};

// Xóa Todo
exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
