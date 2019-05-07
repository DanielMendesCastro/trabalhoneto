module.exports = function(aplicacao){
    aplicacao.get('/usuario', function(requisicao, resposta){
        // if(requisicao.session.autenticado)
             aplicacao.app.controllers.usuario.index(aplicacao, resposta);
        // else
        //   resposta.redirect('/login');
    });

    aplicacao.get('/novo', function(requisicao, resposta){
        // if(requisicao.session.autenticado)
            aplicacao.app.controllers.usuario.novo(aplicacao, resposta);
        // else
        //     resposta.redirect('/login');
    });

    aplicacao.get('/alterar', function(requisicao, resposta){
        // if(requisicao.session.autenticado)
            aplicacao.app.controllers.usuario.alterar(aplicacao, requisicao, resposta);
        // else
        //     resposta.redirect('/login');
    });

    aplicacao.get('/detalhe', function(requisicao, resposta){
        // if(requisicao.session.autenticado)
            aplicacao.app.controllers.usuario.detalhe(aplicacao, requisicao, resposta);
        // else
        //     resposta.redirect('/login');
    });

    aplicacao.get('/excluir', function(requisicao, resposta){
       // if(requisicao.session.autenticado)
            aplicacao.app.controllers.usuario.excluir(aplicacao, requisicao, resposta);
        // else
        //     resposta.redirect('/login');
    });

    aplicacao.post('/cadastrarUsuario', function(requisicao, resposta){
        // if(requisicao.session.autenticado)
            aplicacao.app.controllers.usuario.cadastrarUsuario(aplicacao, requisicao, resposta);
        // else
        //     resposta.redirect('/login');
    });

    aplicacao.post('/atualizarUsuario', function(requisicao, resposta){
        if(requisicao.session.autenticado)
            aplicacao.app.controllers.usuario.atualizarUsuario(aplicacao, requisicao, resposta);
        else
            resposta.redirect('/login');
    });

}