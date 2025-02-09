// models/Project.js
const mongoose = require("../db/index");

// Define the schema
const projectSchema = new mongoose.Schema({
  projectUrl: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  aosValue: { type: String, required: true },
});

const skillsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  points: { type: Number, required: true },
});

// Create the model
const Projects = mongoose.model("projectDetails", projectSchema);
const Skills = mongoose.model("skills", skillsSchema);

module.exports = { Projects, Skills };
