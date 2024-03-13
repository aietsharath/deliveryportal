'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Pickups','id');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Pickups','DVD_id_Future_Pickup', { type: Sequelize.INTEGER,primaryKey: true,allowNull:true,autoIncrement:false });
  }
};
