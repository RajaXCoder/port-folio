// const ProjectDetails = require("../models/index");
// const connectDB = require("../db/index");
const nodemailer = require("nodemailer");
const { Projects, Skills, Certificates } = require("../models/index");

require("dotenv").config();

const getProjects = async (req, res) => {
  try {
    const projects = await Projects.find();
    res.status(200).json({ projects });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
};

const getSkills = async (req, res) => {
  try {
    const skills = await Skills.findOne();
    res.json({ skills }).status(200);
  } catch (e) {
    console.error("Error fetching skills Data", e);
    res.status(500).json({ message: "Error fetching data" });
  }
};

const getCertificates = async (req, res) => {
  try {
    const certificatez = await Certificates.find();
    res.json({ certificatez }).status(200);
  } catch (e) {
    console.error("Error fetching certificates Data", e);
    res.status(500).json({ message: "Error fetching data" });
  }
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

const sendEmail = async (req, res) => {
  try {
    // Check if body is received
    if (!req.body || !req.body.email) {
      return res.status(400).json({ message: "Invalid request body" });
    }

    const { name, subject, description, email } = req.body;
    console.log("Received Data:", req.body);

    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: subject,
      text: `Dear Rajasekar,
    
    I hope this email finds you well.
    
    My name is ${name}, and I am reaching out to you through your portfolio. Below are the details of my message:
    
    -Name: ${name}
    -Email: ${email}

    -Subject: ${subject}
    
    
    ${description}
    
    I look forward to your response.
    
    Best regards,  
    ${name}
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Error sending email", error });
      }
      res.status(200).json({ message: "Email sent successfully!", info });
    });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports = { getProjects, getSkills, getCertificates, sendEmail };
