module.exports = {
    index: (req, res, next) => {
        res.render('login/index');
    },
    logar: (req, res, next) => {
        //o parametro passado pelo post é recuperado da seguinte forma:
        const { username, pass}  = req.body
        if(username == "teste" && pass == "teste"){
            //https://stackoverflow.com/questions/16209145/how-to-set-cookie-in-node-js-using-express-framework
            res.cookie('usuarioLogado', 1, {maxAge: 600000, httpOnly: true})
            res.redirect("/home");
            return; //o return faz com que saimos dessa função "logar"
        }
        res.render('login/index', {erro: "Login ou senha inválidos"});
    },
    logout: (req, res) => {
        res.clearCookie('usuarioLogado');
        res.redirect('/');
    }

}