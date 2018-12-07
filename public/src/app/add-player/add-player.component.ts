import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerToAdd;
  constructor(private _httpService : HttpService, private _router : Router) { }

  ngOnInit() {
    this.playerToAdd = {name : "", position : ""}
  }
  
  onSubmit(){
    let newPlayer = this._httpService.newPlayer(this.playerToAdd)
    newPlayer.subscribe(data => {
      console.log(data)
    })
    this.playerToAdd = {name : "", position : ""}
    this._router.navigate(['/manage/list'])
  }

}
