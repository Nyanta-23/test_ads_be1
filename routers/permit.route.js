const express = require("express");
const route = express.Router();

const {
  getAllPermit,
  createPermitEmployee,
  getIdPermitEmployee,
  updatePermitEmployee,
  deletePermitEmployee,
} = require("../controllers/permit.controller");

route.get("/", getAllPermit);
route.post("/", createPermitEmployee);
route.get("/:id", getIdPermitEmployee);
route.put("/:id", updatePermitEmployee);
route.delete("/:id", deletePermitEmployee);

module.exports = route;
