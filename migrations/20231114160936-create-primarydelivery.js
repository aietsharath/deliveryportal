'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Primarydeliveries', {
      DVD_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      No_of_Days: {
        type: Sequelize.INTEGER
      },
      rent: {
        type: Sequelize.FLOAT
      },
      movie_Name: {
        type: Sequelize.STRING
      },
      order_No:{ type: Sequelize.INTEGER,references:{model:'Secondarydelivery',key:'order_No'},onUpdate:"CASCADE",onDelete:'SET NULL',},
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
    await queryInterface.dropTable('Primarydeliveries');
  }
};