const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoController');
const validator = require('../validators/todosValidator');

router.get('/', controller.getAllTodos);
router.post('/', validator.validateCreateTodo, controller.createTodo);
router.patch('/:id', controller.markTodoCompleted);
router.delete('/:id', controller.deleteTodo);

module.exports = router;
