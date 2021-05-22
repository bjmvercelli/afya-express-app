module.exports = {
    index: (req, res, next) => {
        res.render('home/index', { title: 'Afya Labs - Bruno Vercelli' });
    },
    
}