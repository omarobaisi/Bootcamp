const express = require("express");
const router = express.Router();

const Person = require("../models/Person");

router.get("/people", function (req, res) {
  Person.find({}, function (err, people) {
    res.send(people);
  });
});

router.post("/person", function (req, res) {
  const person = req.body;
  res.send(person)
  let p1 = new Person(person)
  p1.save();
});

router.put("/person/:id", function (req, res) {
    const personId = req.params.id;
    Person.findByIdAndUpdate(personId, { age: 80 }, { new: true }, function (err, person) {
        console.log(person);
        res.redirect("/person");
    })
});

router.delete("/apocalypse", function(req, res) {
    Person.remove({})
    .then(() => console.log('Succecfuly deleted'))
    res.redirect("/person");
})

module.exports = router;
