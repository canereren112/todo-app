import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpContext } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { DataToken } from '../model/DataToken';
import { LocalStorageRefService } from './local-storage-ref.service';
import { AppConstants } from '../constants/app.constants';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseURL = AppConstants.DOMAIN_URL + "authenticate";
  private dataToken : DataToken = new DataToken("");
  
  private _localStorage: Storage;

  constructor(private httpClient: HttpClient, private _localStorageRefService: LocalStorageRefService) {
     this._localStorage = _localStorageRefService.localStorage
  }

  authenticateUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  loginUser(user: User){
    this.authenticateUser(user).subscribe( data =>{
      this.dataToken = <DataToken> data;
      this._localStorage.setItem("token", this.dataToken.token);
    },
    error => console.log(error));
  }
    

  getToken(){
      return this.dataToken.token ;
  }
}
