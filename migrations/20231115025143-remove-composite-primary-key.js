'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.removeConstraint('Pickups', 'DVD_id'),
      queryInterface.removeConstraint('Pickups', 'movie_Name'),
      queryInterface.removeConstraint('Pickups', 'order_No'),
      queryInterface.removeConstraint('Pickups', 'customerId'),
      queryInterface.removeConstraint('Pickups', 'pickUpBoy'),
      queryInterface.removeConstraint('Pickups', 'movie_Name_Future_Pickup'),
      queryInterface.removeConstraint('Pickups', 'createdAt'),
      queryInterface.removeConstraint('Pickups', 'updatedAt'),
      queryInterface.removeConstraint('Pickups', 'DVD_id_Future_Pickup'),
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
