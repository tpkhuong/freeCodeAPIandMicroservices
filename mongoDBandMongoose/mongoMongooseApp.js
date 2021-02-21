var express = require("express");

var app = express();

var mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var Schema = mongoose.Schema;

var personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

var Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  var deadpoolMarvel = new Person({
    name: "Deadpool",
    age: 1000,
    favoriteFoods: ["eggs", "bread", "cookies", "mangos"],
  });
  deadpoolMarvel.save(function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

var arrayOfPeople = [
  { name: "Bob", age: 2001, favoriteFoods: ["Big Mac"] },
  { name: "Sub-Zero", age: 10000, favoriteFoods: ["Ice Cream"] },
  { name: "Spider-Man", age: 18, favoriteFoods: ["Bugs"] },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

/***** copy and paste to resume mongo and mongoose module freecodecamp *****/

require("dotenv").config();

var mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var Schema = mongoose.Schema;

var personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

var Person = mongoose.model("Person", personSchema);

// let Person;

const createAndSavePerson = (done) => {
  var deadpoolMarvel = new Person({
    name: "Deadpool",
    age: 1000,
    favoriteFoods: ["eggs", "bread", "cookies", "mangos"],
  });
  deadpoolMarvel.save(function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

var arrayOfPeople = [
  { name: "Bob", age: 2001, favoriteFoods: ["Big Mac"] },
  { name: "Sub-Zero", age: 10000, favoriteFoods: ["Ice Cream"] },
  { name: "Spider-Man", age: 18, favoriteFoods: ["Bugs"] },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
