    const models  =  require('../../models');

module.exports.index = function(resposta){
    models.engenheiro.findAll().then(function(engenheiros) {
        resposta.render('engenheiro', {engenheiros: engenheiros});
      });        
}

module.exports.novo = function(resposta){
    resposta.render('engenheiro/novo');
}

module.exports.alterar = function(requisicao, resposta){
  var  id_engenheiro = requisicao.query.id;
  models.engenheiro.findByPk(id_engenheiro).then(
      engenheiro => {
        resposta.render('engenheiro/alterar', {engenheiro:engenheiro });
      }
  ).catch(err => console.log(err)); 
}

module.exports.detalhe = function( requisicao, resposta){
var  id_engenheiro = requisicao.query.id;
   var   engenheiro =  models.engenheiro.findByPk(id_engenheiro)
   models.engenheiro.findByPk(id_engenheiro).then(
    engenheiro => {
      resposta.render('engenheiro/detalhe', {engenheiro:engenheiro });
    }
).catch(err => console.log(err)); 
}

module.exports.excluir = function(requisicao, resposta){
    models.engenheiro.destroy({
        where: {
          id: requisicao.query.id
        }
      }).then(function() {
        resposta.redirect('/engenheiro');
}).catch(err => console.log(err));
}

module.exports.cadastrarEngenheiro = function(requisicao, resposta){
    var  formulario = requisicao.body;
    console.log(formulario);
    models.engenheiro.create(formulario).then(function() {
    resposta.redirect('/engenheiro');
}).catch(err => console.log(err));
}

module.exports.atualizarEngenheiro = function(requisicao, resposta){

    var  formulario = requisicao.body;
    models.engenheiro.update(formulario,{
        where: {id : formulario.id}
    })
    resposta.redirect('/engenheiro');
}