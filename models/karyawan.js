'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Karyawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Karyawan.init({
    nomorInduk: DataTypes.UUID,
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    tglLahir: DataTypes.DATEONLY,
    tglBergabung: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Karyawan',
  });
  return Karyawan;
};