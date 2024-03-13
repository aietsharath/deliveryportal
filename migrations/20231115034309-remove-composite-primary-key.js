'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      const result = await queryInterface.removeConstraint('Pickups', 'Pickups_movie_Name_key');
      console.log('Constraints removed successfully:', result);
    } catch (error) {
      console.error('Error removing constraint:', error);
    }
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
