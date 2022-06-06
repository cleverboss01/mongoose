const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const connectDB = require("./config/database");
const Person = require("./models/personModel");

//connect to database
connectDB();

//initializing app
const app = express();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

//add a person
const addPerson = async () => {
  try {
    const person = await Person.create({
      name: "Daniel",
      age: 25,
      favoriteFoods: ["Beans", "Plantains", "Sphagetti"],
    });
    console.log(person);
  } catch (error) {
    console.error(error);
  }
};

// addPerson();

//adds an array of people
const arrayOfPeople = async () => {
  try {
    const people = await Person.create([
      {
        name: "Toki",
        age: 25,
        favoriteFoods: ["Pizza", "Burger", "Sphagetti", "Rice"],
      },
      {
        name: "Shapati",
        age: 23,
        favoriteFoods: [
          "Pizza",
          "Burger",
          "Sphagetti",
          "Rice",
          "Plantains",
          "Bread",
        ],
      },
      {
        name: "John",
        age: 27,
        favoriteFoods: ["Pizza", "Burger", "Bread", "Rice"],
      },
      {
        name: "Simi",
        age: 24,
        favoriteFoods: ["Pizza", "Burger", "Sphagetti"],
      },
      {
        name: "Korede",
        age: 26,
        favoriteFoods: ["Pizza", "Plantains", "Beans", "Rice"],
      },
      {
        name: "Ndifereke",
        age: 31,
        favoriteFoods: ["Beans", "Yam", "Sphagetti", "Rice"],
      },
    ]);
  } catch (error) {
    console.error(error);
  }
};

// arrayOfPeople();

//Finding people by age
const findPerson = async () => {
  const found = await Person.find({ age: 25 });
  console.log(found);
};

//findPerson()

// Finding one person by unique food
const findOnePerson = async () => {
  const foundOne = await Person.findOne({ favoriteFoods: "Bread" });
  console.log(foundOne);
};

// findOnePerson();

// Finding one person by id
const findPersonById = async () => {
  const id = mongoose.Types.ObjectId("629e1d8a3028f77591fd6f75");
  const foundOne = await Person.findOne({ id });
  console.log(foundOne);
};

// findPersonById();

// Updating one person
const updatePerson = async () => {
  const id = mongoose.Types.ObjectId("629e1d8a3028f77591fd6f75");
  const UpdatedOne = await Person.findByIdAndUpdate(id, {
    $push: { favoriteFoods: ["Beans"] },
  });
  console.log(UpdatedOne);
};
// updatePerson();

const updatePersonAge = async () => {
  const id = mongoose.Types.ObjectId("629e1d8a3028f77591fd6f75");
  const UpdatedAge = await Person.findByIdAndUpdate(id, {
    $set: { age: 20 },
  });
  console.log(UpdatedAge);
};
// updatePersonAge();

//remove one person
const removeOnePerson = async () => {
  const id = mongoose.Types.ObjectId("629e1d8a3028f77591fd6f75");
  const UpdatedOne = await Person.findByIdAndRemove(id);
  console.log("Removed sucessfully!");
};
// removeOnePerson();

//remove many
const removePeople = async () => {
  await Person.deleteMany({ favoriteFoods: "Sphagetti" });
  console.log("Removed all!");
};
// removePeople();
