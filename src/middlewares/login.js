module.exports = (req, res, next) => {
    let usuarioId = req.cookies['usuarioLogado'];
    if(!usuarioId){
        res.redirect('/');
        return;
    }

    req.usuarioId = usuarioId;
    next() //argumento de retorno de chamada para a funcao de middleware
}