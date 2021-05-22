module.exports = (req, res, next) => {
    let usuarioId = req.cookies['usuarioLogado'];
    if(!req.cookies['usuarioLogado']){
        res.redirect('/');
        return;
    }
}