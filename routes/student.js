const express = require("express");
const studentRouter = express.Router();
const data = [
  { id: 1, name: "Alice", age: 20, gen: "f" },
  { id: 2, name: "Bob", age: 22, gen: "m" },
  { id: 3, name: "Charlie", age: 19, gen: "m" },
  { id: 4, name: "Diana", age: 21, gen: "f" },
  { id: 5, name: "Ethan", age: 23, gen: "m" },
  { id: 6, name: "Fiona", age: 18, gen: "f" },
  { id: 7, name: "George", age: 20, gen: "m" },
  { id: 8, name: "Hannah", age: 22, gen: "f" },
  { id: 9, name: "Ian", age: 19, gen: "m" },
  { id: 10, name: "Julia", age: 21, gen: "f" },
];
// routes
//GET / => /students
studentRouter.get("/", async (req, res) => {
  let result = data;
  const gen = req.query.gen;
  if (gen) result = result.filter((stud) => stud.gen === gen);
  const age = req.query.age;
  if (age) result = result.filter((stud) => stud.age >=age);
  res.send(result);
});
//GET /:id => /students/2
studentRouter.get("/:id", async (req, res) => {
  try {
    let student = data.find((stud) => stud.id === req.params.id);
    if (!student) return res.status(404).send({ message: "Data not found" });

    res.send(student);
  } catch (error) {
    res.status(500).send("An Error has occured " + error.message);
  }
});
//POST /
//PUT /:id => /students/7
//DELETE /:id => /students/10

module.exports = studentRouter;
