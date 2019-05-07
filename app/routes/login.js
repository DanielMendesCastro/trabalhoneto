module.exports = function(aplicacao){
    aplicacao.get('/login', function(requisicao, resposta){
        aplicacao.app.controllers.login.Index(resposta);
    });

    aplicacao.post('/autenticar', [
        aplicacao.get('check')('nomeUsuario', 'O nome de usuário é obrigatório').not().isEmpty(),
        aplicacao.get('check')('senha', 'O Campo senha é ogrigatório').not().isEmpty()
    ], function(requisicao, resposta){
        aplicacao.app.controllers.login.Autenticar(aplicacao, requisicao, resposta);
    });

    aplicacao.get('/sair', function(requisicao, resposta){
        aplicacao.app.controllers.login.Sair(requisicao, resposta);
    })
}