// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { User } from '../models/recruit.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
  public userChange : BehaviorSubject<any> = new BehaviorSubject(null);

  public constructor()
  {
    if(this.getToken()){
      let currentUser = JSON.parse(sessionStorage.getItem('CURRENT_USER'));
      this.userChange.next(currentUser);
    }
  }

  public clearLoggedInUser(){
    sessionStorage.removeItem('CURRENT_USER');
    this.userChange.next(null);
  }

  public getToken(): string {
    let currentUser = JSON.parse(sessionStorage.getItem('CURRENT_USER'));
    if(currentUser){
      return currentUser.token;
    }    
  }

  public getCurrentUserID(): Number {
    let currentUser = JSON.parse(sessionStorage.getItem('CURRENT_USER'));
    if(currentUser){
      return currentUser.userID;
    }
  }

  public setUser(userObject:string): void {
    sessionStorage.setItem('CURRENT_USER', JSON.stringify(userObject));
    this.userChange.next(userObject);
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    if(token){
      return true;
    }
    else{
      return false;
    }
  }
}