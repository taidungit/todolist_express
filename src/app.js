const express = require('express');
const middlewaresCors = require('./middleware/middlewaresCors');
const errorHandler = require('./middleware/errorHandler');
const todosRoutes = require('./routes/todo');
const connectDB = require('./config/db');

const app = express();
connectDB();
//App
app.get('/', (req, res) => {
  res.send('🎉 API is working!');
});
// Middlewares
app.use(express.json());
app.use(middlewaresCors);

// Routes
app.use('/todos', todosRoutes);

// Error Handler
app.use(errorHandler);

module.exports = app;
