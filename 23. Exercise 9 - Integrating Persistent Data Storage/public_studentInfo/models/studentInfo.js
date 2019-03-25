var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var studentInfoSchema = new Schema({
  firstName: { String, required: true },
  lastName: { String, required: true },
  degree: String,
  program: String
});

module.exports = mongoose.model("StudentInfo", studentInfoSchema);
