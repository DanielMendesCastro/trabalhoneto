const {SHA3} = require('sha3');
const {usuario} = require('../model/login');

class LoginDAO{
    constructor(conexao){
        this._conexao = conexao;
    }

    Autenticar(usuario, callback){

        let hash = new SHA3(512);
        hash.update(usuario.senha.concat(this._conexao.salt));     

        this._conexao.connection.sync()
        .then(            
            login.findAll.findAll({
                where: {
                  senha: usuario.nomeUsuario ,
                  usuario:hash.digest('hex')
                }
              })
            .toArray(function(erro, usuarioPesquisa){
                client.close();
                callback(usuarioPesquisa);
            }))        
        .catch( (erro) => console.log(erro) )
    }
}

module.exports = function(){
    return LoginDAO;
}