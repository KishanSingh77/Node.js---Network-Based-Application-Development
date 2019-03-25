const express = require("express");
const router = express.Router();
var studentModel;
console.log("routed to student info");

router.get("/", (req, res) => {
  if (Object.keys(req.query).length !== 0) {
    studentModel = require("../models/student");
    studentModel = studentModel.student(
      req.query.firstName,
      req.query.lastName,
      req.query.degree,
      req.query.program
    );

    res.render("main", { student: studentModel });
  } else {
    res.send("<h1>no information available!!!</h1>");
  }
});

module.exports = router;
