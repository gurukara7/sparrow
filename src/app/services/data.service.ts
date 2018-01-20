import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Recruit, Token } from '../models/recruit.model';

@Injectable()
export class DataService {

    //result: any;
    constructor(private _http: HttpClient) { }

    getRecruits(): Observable<Recruit[]> {
        return this._http.get<Recruit[]>('/api/recruits');
    }
    
    addRecruit(newRecruit: Recruit) : Observable<Recruit> {
         var headersObj = new HttpHeaders();
         headersObj.append('Content-Type', 'application/json');

         return this._http.post<Recruit>('/api/addrecruit', newRecruit, { headers : headersObj } );
    }
    
    userLogin(username: String, password: String) : Observable<Token> {
        var headersObj = new HttpHeaders();
        headersObj.append('Content-Type', 'application/json');

        return this._http.post<Token>('/api/authenticate', { userName: username, password : password}, { headers : headersObj } );
   }
}