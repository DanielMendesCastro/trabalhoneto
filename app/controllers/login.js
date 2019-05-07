const models  =  require('../../models');

module.exports.Index = function(resposta){
    resposta.render('login/index', {validacao: false, usuario: {}, mensagem: false});
}

module.exports.Autenticar = function(aplicacao, requisicao, resposta){
    var errosValidacao = aplicacao.get('validationResult')(requisicao);
    var usuario = requisicao.body;

    models.usuario.findAll({
        where: {nomeUsuario : usuario.nomeUsuario,
                senha: usuario.senha} 
    }).then(function(usuarios) {
        console.log(usuarios[0].dataValues);
        if(usuarios[0].dataValues.id == '' || usuarios[0].dataValues.id == null){
            resposta.render('login/index', {validacao: errosValidacao.array(), usuario: usuario, mensagem: 'Verifique o usuário e senha informados'});
            return;
        }
        else{   
            requisicao.session.autenticado = true;
            requisicao.session.primeiroNome = usuarios[0].dataValues.primeiroNome;
            requisicao.session.nomeUsuario = usuarios[0].dataValues.nomeUsuario
            resposta.redirect('usuario/');
        }
      });        
}

module.exports.Sair = function(requisicao, resposta){
    requisicao.session.destroy(function(erro){
        resposta.redirect('/login');    
    });
}