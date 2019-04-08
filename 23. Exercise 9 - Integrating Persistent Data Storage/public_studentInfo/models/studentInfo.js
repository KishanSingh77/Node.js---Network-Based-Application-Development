var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var studentInfoSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  degree: String,
  program: String
});

module.exports = mongoose.model("StudentInfo", studentInfoSchema);
