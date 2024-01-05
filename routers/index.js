const { Karyawan, Cuti } = require("../models");

const express = require("express");
const routes = express.Router();

const employee = require("./employee.route");
const permit = require("./permit.route")

routes.get("/", (req, res) => {
  res.json({
    message: "Selamat datang di CRUD Cuti Karyawan",
  });
});

routes.get("/employeeWithPermit/:parentNum", async (req, res) => {
  try {
    const { parentNum } = req.params;

    const employee = await Karyawan.findAll({
      where: { nomorInduk: parentNum },
      include: Cuti,
    });

    res.status(200).json({
      message: "Data sukses di ambil",
      result: employee,
    });

    // if (employee) {
    //   res.status(200).json({
    //     message: "Data sukses di ambil",
    //     result: employee,
    //   });
    // } else {
    //   res.status(404).json({
    //     message: "Data Karyawan tidak ada",
    //   });
    // }
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({
      message: `Error: ${error}`,
    });
  }
});
routes.use("/employee", employee);
routes.use("/permit", permit);

module.exports = routes;
