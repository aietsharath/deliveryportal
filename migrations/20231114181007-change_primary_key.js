'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     
     await queryInterface.changeColumn('Pickups','DVD_id_Future_Pickup', { type: Sequelize.INTEGER,primaryKey: true, });
     
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.changeColumn('Pickups','id', { type: Sequelize.INTEGER,primaryKey: false, });
     
  }
};
