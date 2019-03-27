import { Injectable } from '@angular/core';
import { MOCK_ACCOUNT } from 'src/app/account.mock';
import { AccountModel } from 'src/app/models/account.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private account: AccountModel = MOCK_ACCOUNT;
  
  constructor() { }

  isAuthorized() {
    return window.localStorage.getItem('token');
  }

  login(username:string, password:string) {
    return username === this.account.username && password === this.account.password;
  }

  startSession() {
    window.localStorage.setItem('token', 'Sl9123jL#!lkajds)8');
  }
}

