const express = require("express");
const {
  getProjects,
  getSkills,
  getCertificates,
  sendEmail,
} = require("../controllers/index");

const router = express.Router();

router.get("/get-projects", (req, res) => {
  console.log("GET /get-projects endpoint hit");
  getProjects(req, res);
});

router.get("/get-skills", getSkills);

router.get("/get-certificates", getCertificates);

router.post("/send-email", sendEmail);

module.exports = router;
