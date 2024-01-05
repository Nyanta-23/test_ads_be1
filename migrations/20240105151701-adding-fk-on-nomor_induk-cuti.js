'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn("Cutis", "nomorInduk", {
      type: Sequelize.STRING,
      references: {
        model: {
          tableName: "Karyawans",
        },
        key: "nomorInduk",
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Cutis", "Cutis_ibfk_1");
    await queryInterface.removeIndex("Cutis", "nomorInduk");

  }
};
