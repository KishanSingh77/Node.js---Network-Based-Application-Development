var student = function(fname, lname, degree, program) {
  var studentModel = {
    firstName: fname,
    lastName: lname,
    degree: degree,
    program: program
  };

  return studentModel;
};
module.exports.student = student;
