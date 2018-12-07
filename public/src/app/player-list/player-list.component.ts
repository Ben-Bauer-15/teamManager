import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  allPlayers;
  constructor(private _httpService : HttpService) { }

  ngOnInit() {
    var self = this
    this.allPlayers = []
    let all = this._httpService.all()
    all.subscribe(data => {
      self.allPlayers = data.data
    })
  }

  confirmDelete(id){
    if (confirm("Are you sure you want to delete this player?")){
      for (var i = 0; i < this.allPlayers.length; i++){
        if (this.allPlayers[i]._id == id){
          this.allPlayers.splice(i, 1)
        }
      }
      let response = this._httpService.delete({id : id})
      response.subscribe(data => {
        console.log(data)
      })
    }
  }
}
