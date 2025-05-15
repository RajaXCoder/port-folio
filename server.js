const express = require("express");
const cors = require("cors");
const allRouters = require("./src/routers/index");
const connectDB = require("./src/db/index");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4000;

const initialServer = () => {
  try {
    app.listen(PORT, () => {
      console.log("Server Connected http://localhost: " + PORT);
    });
    connectDB();
  } catch (e) {
    console.error("Server Connecting Error", e);
  }
};

initialServer();

app.use("/api", allRouters);
