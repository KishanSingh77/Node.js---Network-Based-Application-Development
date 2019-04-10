var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var studentInfoSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  degree: { type: String, required: true },
  program: { type: String, required: true },
  graduationYear: { type: String, required: true },
  email: { type: String, required: true }
});

module.exports = mongoose.model("StudentInfo", studentInfoSchema);
