const { Karyawan } = require("../models");

const moment = require("moment");

module.exports = {
  getAllEmployee: async (req, res) => {
    try {
      const employee = await Karyawan.findAll();

      res.status(200).json({
        message: "Data karyawan di dapatkan",
        data: employee,
      });
    } catch (error) {
      console.error(`Error: ${error}`);
      res.status(500).json({
        message: `Error: ${error}`,
      });
    }
  },
  createEmployee: async (req, res) => {
    try {
      const data = req.body;

      const newEmployee = await Karyawan.create({
        nomorInduk: data.nomorInduk,
        nama: data.nama,
        alamat: data.alamat,
        tglLahir: moment(data.tglLahir, "DD-MM-YYYY"),
        tglBergabung: moment(data.tglBergabung, "DD-MM-YYYY"),
      });

      res.status(201).json({
        message: `Data dengan nomor induk : ${newEmployee.nomorInduk} telah terbuat`,
      });
    } catch (error) {
      console.error(`Error: ${error}`);
      res.status(500).json({
        message: `Error: ${error}`,
      });
    }
  },
  getIdEmployee: async (req, res) => {
    try {
      const { id } = req.params;

      const employee = await Karyawan.findOne({
        where: {
          id,
        },
      });

      res.status(200).json({
        message: "Data telah sukses di ambil",
        results: employee,
      });
    } catch (error) {
      console.error(`Error: ${error}`);
      res.status(500).json({
        message: `Error: ${error}`,
      });
    }
  },
  updateEmployee: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;

      const editEmployee = await Karyawan.update(
        {
          nomorInduk: data.nomorInduk,
          nama: data.nama,
          alamat: data.alamat,
          tglLahir: moment(data.tglLahir, "DD-MM-YYYY"),
          tglBergabung: moment(data.tglBergabung, "DD-MM-YYYY"),
        },
        {
          where: {
            id: id,
          },
        }
      );

      res.status(200).json({
        message: `Data ${data.nomorInduk} telah di ubah`,
      });
    } catch (error) {
      console.error(`Error: ${error}`);
      res.status(500).json({
        message: `Error: ${error}`,
      });
    }
  },
  deleteEmployee: async (req, res) => {
    try {
      const { id } = req.params;

      const employee = await Karyawan.findOne({
        where: {
          id,
        },
      });

      await Karyawan.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        message: `Data dengan nomor induk ${employee.nomorInduk} telah sukses di hapus`,
      });
    } catch (error) {
      console.error(`Error: ${error}`);
      res.status(500).json({
        message: `Error: ${error}`,
      });
    }
  },
};
