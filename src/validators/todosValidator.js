exports.validateCreateTodo = (req, res, next) => {
  const { text } = req.body;
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ message: '"text" field is required and must be a string' });
  }
  next();
};
