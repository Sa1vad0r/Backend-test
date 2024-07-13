const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

//app.get("/", (req, res) => {
//  res.sendFile(path.join(__dirname, "index.html"));
//});

const sayHi = (req, res) => {
  res.send("hi");
};

app.get("/test/", sayHi);

app.get("/", (req, res) => {
  res.send("home page")
})

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.send({
    result: parseInt(a) + parseInt(b)
  });
});

app.listen(5000, () => {
  console.log(`Server is running on port http://localhost:5000/`);
});