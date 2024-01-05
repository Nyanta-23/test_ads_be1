const { Cuti } = require("../models");

module.exports = {
  getAllPermit: async (req, res) => {
    try {
      const employee = await Cuti.findAll();

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
  createPermitEmployee: async (req, res) => {
    try {
      const data = req.body;

      const newPermit = await Cuti.create({
        nomorInduk: data.nomorInduk,
        tglCuti: data.tglCuti,
        lamaCuti: data.lamaCuti,
        keterangan: data.keterangan,
      });

      res.status(201).json({
        message: `Data cuti dengan nomor induk : ${newPermit.nomorInduk} telah terbuat`,
      });
    } catch (error) {
      console.error(`Error: ${error}`);
      res.status(500).json({
        message: `Error: ${error}`,
      });
    }
  },
  getIdPermitEmployee: async (req, res) => {
    try {
      const { id } = req.params;

      const employee = await Cuti.findOne({
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
  updatePermitEmployee: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;

      const editPermit = await Cuti.update(
        {
          nomorInduk: data.nomorInduk,
          tglCuti: data.tglCuti,
          lamaCuti: data.lamaCuti,
          keterangan: data.keterangan,
        },
        {
          where: {
            id: id,
          },
        }
      );

      res.status(200).json({
        message: `Data cuti ${data.nomorInduk} telah di ubah`,
      });
    } catch (error) {
      console.error(`Error: ${error}`);
      res.status(500).json({
        message: `Error: ${error}`,
      });
    }
  },
  deletePermitEmployee: async (req, res) => {
    try {
      const { id } = req.params;

      const employee = await Cuti.findOne({
        where: {
          id,
        },
      });

      await Cuti.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        message: `Data cuti dengan nomor induk ${employee.nomorInduk} telah sukses di hapus`,
      });
    } catch (error) {
      console.error(`Error: ${error}`);
      res.status(500).json({
        message: `Error: ${error}`,
      });
    }
  },
};

// "nomorInduk": "IP06001",
// "tglCuti": "02-08-2020",
// "lamaCuti": 2,
// "keterangan": "Acara Keluarga"
