'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Secondarydelivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Secondarydelivery.init({
    order_No:  {
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    deliveryCharge: DataTypes.FLOAT,
    deliveryBoy: DataTypes.STRING,
    customerId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Secondarydelivery',
  });
  return Secondarydelivery;
};