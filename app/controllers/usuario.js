var models  = require('../model');
module.exports.index = function(resposta){
    models.User.findAll({
        include: [ models.Task ]
      }).then(function(users) {
        resposta.render('usuario', {usuarios: usuarios});
      });        
}

module.exports.novo = function(resposta){
    resposta.render('usuario/novo');
}

module.exports.alterar = function(aplicacao, requisicao, resposta){
    
    var  id_usuario = requisicao.query.id;
    var  conexao = aplicacao.config.DbConnection;
    var  usuarioDAO = new aplicacao.app.repositories.UsuarioDAO(conexao);

    usuarioDAO.BuscarUsuario(id_usuario, function(usuario){
        resposta.render('usuario/alterar', {usuario: usuario[0] });
    });
}

module.exports.detalhe = function( requisicao, resposta){
   var   usuario =  models.findOne(id_usuario)
    .then(client => {
        client.db()
        .collection('usuarios')
        .find({_id: new MongoDB.ObjectID(id_usuario)})
        .toArray(function(erro, usuario){
            client.close();
            callback(usuario);
        });
    }).catch(err => console.log(err));

    resposta.render('usuario/detalhe', {usuario: usuario[0]});
}

module.exports.excluir = function(requisicao, resposta){

    models.destroy({
        where: {
          id: req.params.user_id
        }
      }).then(function() {
        resposta.redirect('/usuario');
}).catch(err => console.log(err));
}

module.exports.cadastrarUsuario = function(requisicao, resposta){
    var  formulario = requisicao.body;
    var  usuarioDAO =  models.create({})
    usuarioDAO.CadastrarUsuario(formulario);
    resposta.redirect('/usuario');
}

module.exports.atualizarUsuario = function(requisicao, resposta){

    var  formulario = requisicao.body;
    models.update(formulario,{
        where: {id : formulario.id}
    })
    resposta.redirect('/usuario');
}