const express = require("express");
const app = express();
const con = require("./src/config/db");
require("dotenv").config();

const port = process.env.PORT;

app.use(express.json());

//health check
app.get("/", (req, res) => {
  res.send({ message: "OK" });
});

// calling routes
app.use("/patient", require("./src/routes/patient.routes"));



app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
