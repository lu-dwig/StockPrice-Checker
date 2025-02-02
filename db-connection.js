const mongoose = require("mongoose");
const db =mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

require('dotenv').config({ path: '.env' });
module.exports = db;
