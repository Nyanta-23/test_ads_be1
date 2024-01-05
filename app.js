const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routers");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on Port:${PORT}`);
  console.log(`Running on URL: http://localhost:${PORT}`);
});