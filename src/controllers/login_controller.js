module.exports = {
    index: (req, res, next) => {
        res.render('login/index', { title: 'Afya Labs - Bruno Vercelli' });
    },
    logar: (req, res, next) => {
        //o parametro passado pelo post é recuperado da seguinte forma:
        const { username, pass}  = req.body
        if(username == "teste" && pass == "teste"){
            res.redirect("/home");
            return; //o return faz com que saimos dessa função "logar"
        }
        res.render('login/index', { title: 'Afya Labs - Bruno Vercelli' });
    }
}