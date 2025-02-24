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

const certificatesSchema = new mongoose.Schema({
  name : {type: String, required: true},
  url : {type: String, required: true},
  date : {type: String, required: true}
})

// Create the model
const Projects = mongoose.model("projectDetails", projectSchema);
const Skills = mongoose.model("skills", skillsSchema);
const Certificates = mongoose.model("certificates", certificatesSchema);

module.exports = { Projects, Skills, Certificates };
