'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Primarydelivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Primarydelivery.belongsTo(models.Primarydelivery, { foreignKey: 'order_No', as: 'secondaryDelivery', });
    }
  }
  Primarydelivery.init({
    DVD_id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    No_of_Days: DataTypes.INTEGER,
    rent: DataTypes.FLOAT,
    movie_Name: DataTypes.STRING,
    order_No:{type:DataTypes.INTEGER,references:{model:'Secondarydelivery',key:'order_No'},onUpdate:"CASCADE",onDelete:'SET NULL',} 
  }, {
    sequelize,
    modelName: 'Primarydelivery',
  });
  return Primarydelivery;
};
