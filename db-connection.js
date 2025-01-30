const moongoose = require("mongoose");
const db =moongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;
