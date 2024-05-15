const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

app.use(express.json());

//health check
app.get("/",(req, res) => {
    res.send({message : "OK"})
})

app.listen(port,() => {
    console.log(`server is running on port : ${port}`)
})