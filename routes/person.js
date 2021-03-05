const Person = require("../models/person");
const express = require("express");
const router = express.Router();



router.post("/", (req, res) => {
      const newPerson = new Person({ name: "Ahmed", age: 30, favoriteFoods: ["pizza"] });
      newPerson
            .save()
            .then(() => res.send("user has been added with success"))
            .catch((err) => res.send(err))
});





router.post("/Manypersons", (req, res) => {

     
      let arrayOfPersons=[
            { name: "Imed", age: 20, favoriteFoods: ["hamburger"] },
            { name: "Amal", age: 29, favoriteFoods: ["rice"] },
            { name: "Issam", age: 35, favoriteFoods: ["Salad"] },
            { name: "Ali", age: 17, favoriteFoods: ["Soup"] }
      ];

      Person
            .insertMany(arrayOfPersons)
            .then(() => res.send("users has been added with success"))
            .catch((err) => res.send(err))
});



router.get("/name/:name", (req, res) => {
     
      let name =  { ...req.params };
      Person.find(name)
      .then((persons) => res.send(persons))
      .catch((err) => res.send(err))
})

  

router.get("/favoriteFoods/:fav", (req, res) => {
      
      
      let food= {...req.params}
      let fav = { favoriteFoods: { $all: [food] } }

      
      Person.findOne(food)
      .then((persons) => res.send(persons))
      .catch((err) => res.send(err))
})

module.exports = router;