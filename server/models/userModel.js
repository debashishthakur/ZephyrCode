const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    //Mandatory Fields
    username: { type: String, required: true },
    password: { type: String, required: true },

    //Personal Info
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    email: { type: String, default: "" },
    mobileNumber: { type: String, default: "" },
    portfolio: { type: String, default: "" },
    about: { type: String, default: "" },
    address: { type: String, default: "" },

    //Skills
    education: { type: [], default: [""] },
    skills: { type: [], default: [""] },
    projects: { type: [], default: [""] },
    experience: { type: [], default: [""] },

    //Jobs
    appliedJobs: [],
  },
  {
    timestamps: true,
  }
);

const userModel = new mongoose.model("users", userSchema);

module.exports = userModel;
