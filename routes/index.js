var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {

  const students = [
    { name: "Emmanuel", age: 70, img:"/images/puppy-2.jpg" },
    { name: "Newton", age: 67, img:"/images/curious-bird.jpg" },
  ];
  res.render("home", { students:students });
});

module.exports = router;
