const HomeController = {
    index: (req, res, next) => {
        res.render('home/index', { title: 'Afya Labs - Bruno Vercelli' });
    }
}

module.exports = HomeController;