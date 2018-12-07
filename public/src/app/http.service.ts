import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient) { }

  all(){
    return this._http.get('/players')
  }

  newPlayer(obj){
    return this._http.post('/new', obj)
  }

  updatePlayer(id, game, status){
    return this._http.get('/update/' + id + "/" + game + '/' + status)
  }

  delete(obj){
    return this._http.post('/delete', obj)
  }

}
