const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    aadharCard: {
      type: String,
      required: true,
    },
    fssaCertificate: {
      type: String,
      required: true,
    },
    hotelInformation: {
      hotelName: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      contactNumber: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      registrationNumber: {
        type: String,
        required: true,
      },
      amenities: [String],
      photos: [String],
    },
    credentials: {
      username: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Admin", adminSchema);
