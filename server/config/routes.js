var path = require('path')
var controller = require('../controllers/players')
module.exports = function(app){
    app.get('/', function(req, res){
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })

    app.get('/players', function(req, res){
        controller.allPlayers(req, res)
    })

    app.post('/new', function(req, res){
        controller.makePlayer(req, res)
    })

    app.get('/update/:id/:game/:status', function(req, res){
        controller.updateStatus(req, res)
    })

    app.post('/delete', function(req, res){
        controller.delete(req, res)
    })

    app.all('*', function(req, res){
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })

}