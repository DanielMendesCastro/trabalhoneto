module.exports = function(aplicacao){
    aplicacao.get('/usuario', function(requisicao, resposta){
        if(requisicao.session.autenticado)
             aplicacao.app.controllers.usuario.index(resposta);
        else
          resposta.redirect('/login');
    });

    aplicacao.get('/novo', function(requisicao, resposta){
        if(requisicao.session.autenticado)
            aplicacao.app.controllers.usuario.novo(resposta);
        else
            resposta.redirect('/login');
    });

    aplicacao.get('/alterar', function(requisicao, resposta){
        if(requisicao.session.autenticado)
            aplicacao.app.controllers.usuario.alterar(requisicao, resposta);
        else
            resposta.redirect('/login');
    });

    aplicacao.get('/detalhe', function(requisicao, resposta){
        if(requisicao.session.autenticado)
            aplicacao.app.controllers.usuario.detalhe(requisicao, resposta);
        else
            resposta.redirect('/login');
    });

    aplicacao.get('/excluir', function(requisicao, resposta){
       if(requisicao.session.autenticado)
            aplicacao.app.controllers.usuario.excluir(requisicao, resposta);
        else
            resposta.redirect('/login');
    });

    aplicacao.post('/cadastrarUsuario', function(requisicao, resposta){
        if(requisicao.session.autenticado)
            aplicacao.app.controllers.usuario.cadastrarUsuario(requisicao, resposta);
        else
            resposta.redirect('/login');
    });

    aplicacao.post('/atualizarUsuario', function(requisicao, resposta){
        if(requisicao.session.autenticado)
            aplicacao.app.controllers.usuario.atualizarUsuario(requisicao, resposta);
        else
            resposta.redirect('/login');
    });

}