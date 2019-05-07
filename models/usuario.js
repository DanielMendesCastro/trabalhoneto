
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
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
      },{      
        freezeTableName: true,
        timestamps: false 
    });

      return Usuario;
    }
