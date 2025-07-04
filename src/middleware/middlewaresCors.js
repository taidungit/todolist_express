const cors = require('cors');
module.exports = cors({
  origin: '*', // Cho phép tất cả, hoặc set thành domain frontend
  methods: ['GET', 'POST', 'PATCH', 'DELETE']
});
