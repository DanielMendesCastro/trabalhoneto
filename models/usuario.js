module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      'usuario',
      {
        primeiroNome: DataTypes.STRING,
        ultimoNome: DataTypes.STRING,
        nomeUsuario: DataTypes.STRING,
        senha: DataTypes.STRING,
        email: DataTypes.STRING,
        endereco: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        telefone: DataTypes.STRING,
        dtNascimento: DataTypes.DATE
      });

      return User;
    }
