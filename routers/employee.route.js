const express = require("express");
const route = express.Router();

const {
  getAllEmployee,
  createEmployee,
  updateEmployee,
  getIdEmployee,
  deleteEmployee,
} = require("../controllers/employee.controller");

route.get("/", getAllEmployee);
route.post("/", createEmployee);
route.put("/:id", updateEmployee);
route.get("/:id", getIdEmployee);
route.delete("/:id", deleteEmployee);

module.exports = route;
