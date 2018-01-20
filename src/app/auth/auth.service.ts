// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  
  public getToken(): string {
    return sessionStorage.getItem('eeca1fff00db_token');
  }

  public setToken(tokenValue:string): void {
    return sessionStorage.setItem('eeca1fff00db_token', tokenValue);
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