const express = require("express");

const { getProjects, getSkills, sendEmail } = require("../controllers/index");

const router = express.Router();

router.get("/get-projects", (req, res) => {
  console.log("GET /get-projects endpoint hit");
  getProjects(req, res);
});

router.get("/get-skills", (req, res) => {
  console.log("GET /get-skills endpoints hit");
  getSkills(req, res);
});

router.post("/send-email", (req, res) => {
  console.log("POST /send-email endpoint hit");
  sendEmail(req, res);
});
module.exports = router;
