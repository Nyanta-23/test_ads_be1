'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cuti extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cuti.init({
    nomorInduk: DataTypes.STRING,
    tglCuti: DataTypes.DATEONLY,
    lamaCuti: DataTypes.INTEGER,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cuti',
  });
  return Cuti;
};