var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/players');
mongoose.Promise = global.Promise;


var GameSchema = new mongoose.Schema({
    number : Number,
    status : String
})

var PlayerSchema = new mongoose.Schema({
    name: String,
    position : String,
    games : [GameSchema],
    createdAt : Date,
    updatedAt : Date
})

mongoose.model('Player', PlayerSchema)
mongoose.model('Game', GameSchema)

module.exports = {
    Player : mongoose.model('Player'),
    Game : mongoose.model('Game')
}
