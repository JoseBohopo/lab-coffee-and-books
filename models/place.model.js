const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      set: (value) =>
        value.charAt(0).toUpperCase() + value.substring(1).toLowerCase(),
    },
    type: {
      type: String,
      enum: ["coffee shop", "bookstore"],
    },
    location: {
      type: {
        type: String,
      },
      coordinates: [Number],
    },
  },
  {
    timestamps: true,
  }
);

placeSchema.index({ location: "2dsphere"});

const Place = model("Place", placeSchema);

module.exports = Place;
