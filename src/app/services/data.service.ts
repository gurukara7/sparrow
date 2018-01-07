import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Recruit } from '../models/recruit.model';

@Injectable()
export class DataService {

    //result: any;
    constructor(private _http: HttpClient) { }

    getRecruits(): Observable<Recruit[]> {
        //return this._http.get("/api/recruits").map(result => this.result = result.json());
        return this._http.get<Recruit[]>('/api/recruits');
    }
    
    addRecruit(newRecruit: Recruit) : Observable<Recruit> {
         //console.log('called add recruit');
         var headersObj = new HttpHeaders();
         headersObj.append('Content-Type', 'application/json');
         //return this._http.get<Recruit>('/api/recruits');
         return this._http.post<Recruit>('/api/recruit', newRecruit, { headers : headersObj } );
    }
}


//import { Injectable }   from '@angular/core';
//import { HttpClient }   from '@angular/common/http';
//import { Observable }   from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
////import { User } from '../models/user.model';
//@Injectable()
//export class UserService {
//    private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

//    constructor(private http: HttpClient) { }

//    getUser(): Observable<User[]> {
//        return this.http.get<User[]>(this.serviceUrl);
//    }

//}

//export interface User {
//    name: string;
//    email: string;
//    phone: string;
//    company: {
//        name: string;
//    }
//}