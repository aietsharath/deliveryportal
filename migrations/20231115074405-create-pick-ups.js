'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PickUps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DVD_id: {
        type: Sequelize.INTEGER
      },
      movie_Name: {
        type: Sequelize.STRING
      },
      order_No: {
        type: Sequelize.INTEGER
      },
      customerId: {
        type: Sequelize.INTEGER
      },
      pickUpBoy: {
        type: Sequelize.STRING
      },
      DVD_id_Future_Pickup: {
        type: Sequelize.INTEGER
      },
      movie_Name_Future_Pickup: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PickUps');
  }
};