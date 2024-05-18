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
app.use("/", require("./src/routes/auth.routes"));

// app.get("/hospital", (req, res) => {
//   con.query("SELECT * FROM hospital", (err, result) => {
//     if (err) {
//       console.error("Error:", err);
//       res.status(500).send({ error: "Internal server error" });
//     } else {
//       res.status(200).json(result);
//       console.log(result);
//     }
//   });
// });

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
