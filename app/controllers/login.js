module.exports.Index = function(resposta){
    resposta.render('login/index', {validacao: false, usuario: {}, mensagem: false});
}

module.exports.Autenticar = function(aplicacao, requisicao, resposta){
    let errosValidacao = aplicacao.get('validationResult')(requisicao);
    let usuario = requisicao.body;

    if(!errosValidacao.isEmpty()){
        console.log(errosValidacao.array());
        resposta.render('login/index', {validacao: errosValidacao.array(), usuario: usuario, mensagem: false});
        return;
    }

    let conexao = aplicacao.config.DbConnection;
    let loginDAO = new aplicacao.app.repositories.LoginDAO(conexao);

    loginDAO.Autenticar(usuario, function(usuarioPesquisa){

        if(usuarioPesquisa.length > 0){
            requisicao.session.autenticado = true;
            requisicao.session.primeiroNome = usuarioPesquisa[0].primeiroNome;
            requisicao.session.nomeUsuario = usuarioPesquisa[0].nomeUsuario
            resposta.redirect('usuario/');
        }
        else
            resposta.render('login/index', {validacao: false, usuario: usuario, mensagem: 'Verifique o usuário e senha informados'});
    });
}

module.exports.Sair = function(requisicao, resposta){
    requisicao.session.destroy(function(erro){
        resposta.redirect('/login');    
    });
}