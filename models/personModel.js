const mongoose = require("mongoose");

const personSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please input name"],
    },

    age: Number,
    favoriteFoods: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Person", personSchema);
