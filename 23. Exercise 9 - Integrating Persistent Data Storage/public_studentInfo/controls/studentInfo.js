var express = require("express");
var app = (module.exports = express());
const StudentInfo = require("../models/studentInfo");
var dialog = require("dialog");
var path = process.cwd();

//routing starts
app.get("/", function(request, response) {
  var studentObj = require("./../models/student");

  console.log(request.body);

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

    console.log("path from where node was started" + path);
    response.sendFile(path + "/views/index.html");
  }
});
/************************************************************************ /
/************************************************************************/

app.get("/:firstName/:lastName/:degree/:program", function(request, response) {
  console.log("took parameters");

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

  console.log("student data object from mongoose model ");
  console.log(studentObj);

  response.render("main", { student: studentObj });
});
/************************************************************************ /
/************************************************************************/
//updated for EXERCISE-6
app.post("/", (request, response) => {
  console.log("Post body");

  console.log(request.body);
  if (request.body.action == "save" && request.body.firstName !== "") {
    console.log("1");

    StudentInfo.find({
      firstName: request.body.firstName,
      lastName: request.body.lastName
    })
      .exec()
      .then(student => {
        if (student.length > 0) {
          StudentInfo.updateOne(
            { firstName: student[0].firstName, lastName: student[0].lastName },
            {
              $set: {
                program: request.body.program,
                degree: request.body.degree
              }
            },
            success =>
              StudentInfo.find()
                .exec()
                .then(studentsList => {
                  return response.render("main", {
                    studentsList: studentsList
                  });
                })
          );
        } else {
          let studentObj = new StudentInfo({
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            degree: request.body.degree,
            program: request.body.program
          });

          studentObj.save().then(success => {
            StudentInfo.find()
              .exec()
              .then(studentsList => {
                return response.render("main", { studentsList: studentsList });
              });
          });
        }
      });
  } else if (
    request.body.action == "save" &&
    request.body.firstName === "" &&
    request.body.lastName === "" &&
    request.body.program === "" &&
    request.body.degree === ""
  ) {
    console.log("2");
    StudentInfo.find()
      .exec()
      .then(studentsList => {
        return response.render("main", { studentsList: studentsList });
      });
  } else if (
    (request.body.action == "save" && request.body.firstName === "") ||
    request.body.lastName === "" ||
    request.body.program === "" ||
    request.body.degree === ""
  ) {
    dialog.info("Please enter required fields!", "Warning!!");
    response.sendFile(path + "/views/index.html");
  } else if (request.body.action == "search") {
    StudentInfo.find({ firstName: request.body.firstName })
      .exec()
      .then(searchList => {
        return response.render("main", { studentsList: searchList });
      });
  }
});
//*/
