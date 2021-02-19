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
