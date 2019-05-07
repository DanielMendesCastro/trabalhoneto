    const models  =  require('../../models');

module.exports.index = function(resposta){
    models.usuario.findAll().then(function(usuarios) {
        resposta.render('usuario', {usuarios: usuarios});
      });        
}

module.exports.novo = function(resposta){
    resposta.render('usuario/novo');
}

module.exports.alterar = function(requisicao, resposta){
  var  id_usuario = requisicao.query.id;
  models.usuario.findByPk(id_usuario).then(
      usuario => {
        resposta.render('usuario/alterar', {usuario:usuario });
      }
  ).catch(err => console.log(err)); 
}

module.exports.detalhe = function( requisicao, resposta){
var  id_usuario = requisicao.query.id;
   var   usuario =  models.usuario.findByPk(id_usuario)
   models.usuario.findByPk(id_usuario).then(
    usuario => {
      resposta.render('usuario/detalhe', {usuario:usuario });
    }
).catch(err => console.log(err)); 
}

module.exports.excluir = function(requisicao, resposta){
    models.usuario.destroy({
        where: {
          id: requisicao.query.id
        }
      }).then(function() {
        resposta.redirect('/usuario');
}).catch(err => console.log(err));
}

module.exports.cadastrarUsuario = function(requisicao, resposta){
    var  formulario = requisicao.body;
    console.log(formulario);
    models.usuario.create(formulario).then(function() {
    resposta.redirect('/usuario');
}).catch(err => console.log(err));
}

module.exports.atualizarUsuario = function(requisicao, resposta){

    var  formulario = requisicao.body;
    models.usuario.update(formulario,{
        where: {id : formulario.id}
    })
    resposta.redirect('/usuario');
}