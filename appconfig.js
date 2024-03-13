const { Sequelize,DataTypes } = require('sequelize');

const sequelize = new Sequelize('Clenet', 'postgres', 'sharath', {
  host: 'localhost',
  dialect: 'postgres',
});

const PrimaryDeliveries = sequelize.define('Primarydeliveries', {
  // Define your table columns here
  DVD_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
      },
      No_of_Days: {
    type: DataTypes.INTEGER,
  },
  rent: {
    type: DataTypes.FLOAT,
  },
  movie_Name: {
    type: DataTypes.STRING,
  },
  order_No: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },

});
const SecondaryDeliveries = sequelize.define('Secondarydeliveries', {
  // Define your table columns here
  order_No: {
    type: DataTypes.INTEGER,
    primaryKey: true,
      },
      deliveryCharge: {
    type: DataTypes.STRING,
  },
  deliveryBoy: {
    type: DataTypes.STRING,
  },
  customerId: {
    type: DataTypes.INTEGER,
  },
});
const PickUps = sequelize.define('PickUps', {
  // Define your table columns here
  DVD_id_Future_Pickup: {
    type: DataTypes.INTEGER,
      }

});
// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

(async () => {
  try {
    await PrimaryDeliveries.sync();
    console.log('User model synchronized with the database.');
  } catch (error) {
    console.error('Error synchronizing User model:', error);
  } 
  // finally {
  //   // Close the Sequelize connection
  //   await sequelize.close();
  //   console.log('Connection closed.');
  // }
})();

(async () => {
  try {
    await SecondaryDeliveries.sync();
    console.log('User model synchronized with the database.');
  } catch (error) {
    console.error('Error synchronizing User model:', error);
  } 
  // finally {
  //   // Close the Sequelize connection
  //   await sequelize.close();
  //   console.log('Connection closed.');
  // }
})();
(async () => {
  try {
    await PickUps.sync();
    console.log('User model synchronized with the database.');
  } catch (error) {
    console.error('Error synchronizing User model:', error);
  } 
  // finally {
  //   // Close the Sequelize connection
  //   await sequelize.close();
  //   console.log('Connection closed.');
  // }
})();
module.exports = {
  PrimaryDeliveries,
  SecondaryDeliveries,
  PickUps,
  sequelize
};