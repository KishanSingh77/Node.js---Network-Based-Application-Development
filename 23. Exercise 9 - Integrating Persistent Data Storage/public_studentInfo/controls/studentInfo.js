var express = require("express");
var app = (module.exports = express());

app.get("/", function(request, response) {
  var studentObj = require("./../models/student");

  var studentReqParams = request.query;

  console.log("query string is ");
  console.log(studentReqParams);

  if (Object.keys(studentReqParams).length != 0) {
    console.log("request with query string was sent");

    studentObj.setFirstName(studentReqParams.firstName);
    studentObj.setLastName(studentReqParams.lastName);
    studentObj.setDegree(studentReqParams.degree);
    studentObj.setProgram(studentReqParams.program);
    student = studentObj.getStudentInfo();

    console.log("student data object is ");
    console.log(student);

    response.render("main", { student: student });
  } else {
    console.log("request with query string was sent");
    var path = process.cwd();
    console.log("path from where node was started" + path);
    response.sendFile(path + "/views/index.html");
  }
});
/************************************************************************ /
/************************************************************************/

app.get("/:firstName/:lastName/:degree/:program", function(request, response) {
  var sentFirstName = request.params.firstName;
  var sentLastName = request.params.lastName;
  var sentDegree = request.params.degree;
  var sentProgram = request.params.program;

  var studentObj = require("./../models/student");

  studentObj.setFirstName(sentFirstName);
  studentObj.setLastName(sentLastName);
  studentObj.setDegree(sentDegree);
  studentObj.setProgram(sentProgram);
  student = studentObj.getStudentInfo();
  console.log("student data object is ");
  console.log(studentObj);

  response.render("main", { student: studentObj });
});
//*/
