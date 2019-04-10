/* @nanajjar */

let firstName, lastName, degree, program, email, graduationYear;
exports.setFirstName = function(fName) {
  firstName = fName;
};

exports.getFirstName = function() {
  return firstName;
};

exports.setLastName = function(lName) {
  lastName = lName;
};

exports.getLastName = function() {
  return lastName;
};
exports.setDegree = function(d) {
  degree = d;
};

exports.getDegree = function() {
  return degree;
};
exports.setProgram = function(p) {
  program = p;
};

exports.getProgram = function() {
  return program;
};

exports.setGraduationYear = function(g) {
  graduationYear = g;
};

exports.getGraduationYear = function() {
  return graduationYear;
};

exports.setEmail = function(e) {
  email = e;
};

exports.getEmail = function() {
  return email;
};

// You're a function that returns full name
exports.studentName = function() {
  return firstName + " " + lastName;
};

// // You're returning an object with property values set above
exports.getStudentInfo = function() {
  return {
    firstName: firstName,
    lastName: lastName,
    degree: degree,
    program: program,
    graduationYear: graduationYear,
    email: email
  };
};
