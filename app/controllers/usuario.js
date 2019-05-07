module.exports.index = function(aplicacao, resposta){
    
    let conexao = aplicacao.config.DbConnection;
    let usuarioDAO = new aplicacao.app.repositories.UsuarioDAO(conexao);

    usuarioDAO.BuscarTodosUsuarios(function(usuarios){
        resposta.render('usuario', {usuarios: usuarios});
    });
}

module.exports.novo = function(aplicacao, resposta){
    resposta.render('usuario/novo');
}

module.exports.alterar = function(aplicacao, requisicao, resposta){
    
    let id_usuario = requisicao.query.id;
    let conexao = aplicacao.config.DbConnection;
    let usuarioDAO = new aplicacao.app.repositories.UsuarioDAO(conexao);

    usuarioDAO.BuscarUsuario(id_usuario, function(usuario){
        resposta.render('usuario/alterar', {usuario: usuario[0] });
    });
}

module.exports.detalhe = function(aplicacao, requisicao, resposta){

    let id_usuario = requisicao.query.id;
    let conexao = aplicacao.config.DbConnection;
    let usuarioDAO = new aplicacao.app.repositories.UsuarioDAO(conexao);
    
    usuarioDAO.BuscarUsuario(id_usuario, function(usuario){
        resposta.render('usuario/detalhe', {usuario: usuario[0] });
    });
}

module.exports.excluir = function(aplicacao, requisicao, resposta){

    let id_usuario = requisicao.query.id;
    let conexao = aplicacao.config.DbConnection;
    let usuarioDAO = new aplicacao.app.repositories.UsuarioDAO(conexao);

    usuarioDAO.ExcluirUsuario(id_usuario);
    
    resposta.redirect('/usuario');    
}

module.exports.cadastrarUsuario = function(aplicacao, requisicao, resposta){

    let formulario = requisicao.body;
    let conexao = aplicacao.config.DbConnection;
    let usuarioDAO = new aplicacao.app.repositories.UsuarioDAO(conexao);

    usuarioDAO.CadastrarUsuario(formulario);
    resposta.redirect('/usuario');
}

module.exports.atualizarUsuario = function(aplicacao, requisicao, resposta){

    let formulario = requisicao.body;
    let conexao = aplicacao.config.DbConnection;
    let usuarioDAO = new aplicacao.app.repositories.UsuarioDAO(conexao);
    usuarioDAO.AtualizarUsuario(formulario);
    resposta.redirect('/usuario');
}

