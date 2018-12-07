var Player = require('../models/player').Player
var Game = require('../models/player').Game


module.exports = {
    allPlayers : function(req, res){
        Player.find({}, function(err, players){
            if (err){
                res.json({message : "Failure", data : err})
            }
            else {
                res.json({message : "Success", data : players})
            }
        })
    },

    makePlayer : function(req, res){
        //make a new player using the post data
        var player = new Player({
            name : req.body.name,
            position : req.body.position,
            games : [],
            createdAt : new Date(),
            updatedAt : new Date()
        })

        //for now, add 3 game objects to the players games
        //by default, the player's status is undefined (can be changed later)
        for (var i = 1; i < 4; i++){
            player.games.push(new Game({status : "undecided", number : i}))
        }

        player.save(function(err){
            if (err){
                res.json({message : "Failure", data : err})
            }
            else {
                res.json({message : "Success", data : player})
            }
        })
    },

    updateStatus : function(req, res){
        //first, find the player from the db
        Player.find({_id : Object(req.params.id)}, function(err, array){
            if (err){
                res.json({message : "Failure", data : err})
            }
            else {
                //response from db will be array of length 1
                var player = array[0]

                //to be more friendly for the front end, the game number will be 
                //one-indexed, so subtract one to get to the game in question
                //update the status for this game and save the player
                player.games[req.params.game - 1].status = req.params.status
                player.save(function(err){
                    if (err){
                        res.json({message : "Failure", data : err})
                    }
                    else {
                        res.json({message : "Success", data : player})
                    }
                })
            }
        })
    },

    delete : function(req, res){
        Player.remove({_id : Object(req.body.id)}, function(err){
            if (err){
                res.json({message : "Failure", data : err})
            }
            else {
                res.json({message : "Success"})
            }
        })
    }
}