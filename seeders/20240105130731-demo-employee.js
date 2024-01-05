"use strict";

// const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Karyawans", [
      {
        nama: "Jhon",
        nomorInduk: "IP06001",
        alamat: "Garut",
        tglLahir: "2001-07-10",
        tglBergabung: "2021-07-10",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Ken",
        nomorInduk: "IP06002",
        alamat: "Cibaduyut",
        tglLahir: "2001-08-10",
        tglBergabung: "2020-07-10",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Karyawans", null, {});
  },
};
