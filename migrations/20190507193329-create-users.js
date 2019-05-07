'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      primeiroNome: {
        type: Sequelize.STRING
      }, 
      ultimoNome: {
        type: Sequelize.STRING
      },
      nomeUsuario: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.INTEGER
      },
      telefone: {
        type: Sequelize.STRING
      },
      dtNascimento: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Users');
  }
};