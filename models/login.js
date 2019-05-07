module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      'login',
      {
        nomeUsuario: DataTypes.STRING,
        senha: DataTypes.STRING,
      })
    }





   