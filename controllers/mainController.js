const db = require('../database/models');

module.exports = {
    index : function(req,res){
        db.Peliculas.findAll({
            limit : 10
        })
        .then(peliculas => {
            res.render('index',{
                peliculas : peliculas
            })
        })
    }
}