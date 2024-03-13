'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PickUps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PickUps.init({
    DVD_id: DataTypes.INTEGER,
    movie_Name: DataTypes.STRING,
    order_No: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    pickUpBoy: DataTypes.STRING,
    DVD_id_Future_Pickup: DataTypes.INTEGER,
    movie_Name_Future_Pickup: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PickUps',
  });
  return PickUps;
};