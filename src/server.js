require('dotenv').config()
const app = require('./app');
const PORT = process.env.PORT || 4000;
console.log(process.env.PORT)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
