import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { stat } from 'fs';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {
  allPlayers;
  gameNumber;
  constructor(private _httpService : HttpService) { }

  ngOnInit() {
    this.gameNumber = 1
    this.allPlayers = []
    var self = this
    let response = this._httpService.all()
    response.subscribe(data => {
      console.log(data)
      self.allPlayers = data.data
    })
  }

  changeGame(number){
    this.gameNumber = number
  }

  changeStatus(id, gameNumber, status){
    for (var i = 0; i < this.allPlayers.length; i++){
      if (this.allPlayers[i]._id == id){
        this.allPlayers[i].games[gameNumber - 1].status = status
      }
    }
    let response = this._httpService.updatePlayer(id, gameNumber, status)
    response.subscribe(data => {
      console.log(data)
    })
  }

}
