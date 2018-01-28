import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Recruit, Token, User } from '../models/recruit.model';

@Injectable()
export class DataService {

    //result: any;
    constructor(private _http: HttpClient) { }

    getRecruits(userID: Number): Observable<Recruit[]> {
        if(userID){
            return this._http.get<Recruit[]>('/api/getRecruits/' + userID.toString());
        }
        else{
            return this._http.get<Recruit[]>('/api/getRecruits/-1');
        }        
    }
    
    addRecruit(newRecruit: Recruit) : Observable<Recruit> {
         var headersObj = new HttpHeaders();
         headersObj.append('Content-Type', 'application/json');

         return this._http.post<Recruit>('/api/addrecruit', newRecruit, { headers : headersObj } );
    }
    
    userLogin(username: string, password: String) : Observable<string> {
        var headersObj = new HttpHeaders();
        headersObj.append('Content-Type', 'application/json');

        return this._http.post<string>('/api/authenticate', { userName: username, password : password}, { headers : headersObj } );
    }

    getUserDetails(userID: Number): Observable<User> {
        return this._http.get<User>('/api/getUserDetails/' + userID.toString());
    }

    updateUser(updatedUser: User) : Observable<User> {
        var headersObj = new HttpHeaders();
        headersObj.append('Content-Type', 'application/json');

        return this._http.post<User>('/api/setUserDetails/' + updatedUser.userID.toString(), updatedUser, { headers : headersObj } );
    }
}