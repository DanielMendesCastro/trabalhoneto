'use strict';
module.exports = (sequelize, DataTypes) => {
    const login = sequelize.define(
      'login',
      {
        nomeUsuario: DataTypes.STRING,
        senha: DataTypes.STRING,
      },{      
        freezeTableName: true,
    })

      return login;
    }





   