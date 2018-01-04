import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataService } from './data.service';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Recruit } from './models/recruit.model';
import { HttpModule } from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    //title = "Guru";
    // Define a users property to hold our user data
    //recruits = [{"_id":"5a44c0e0734d1d45eaf35204","name":"Guru","number":9480614620,"joining":false},{"_id":"5a44e9a3734d1d45eaf3657c","name":"Raja","number":9480614621,"joining":true}];
    //recruits: Recruit[] = [];
    dataSource_Desktop = new UserDataSource(this._dataService);
    displayedColumns_Desktop = ['name', 'phone', 'email', 'status'];

    dataSource_Mobile = new UserDataSource(this._dataService);
    displayedColumns_Mobile = ['name', 'status'];

    //// Create an instance of the DataService through dependency injection
    //constructor(private _dataService: DataService) {
    constructor(private _dataService: DataService) {
        //this._dataService.getRecruits()
        //    .subscribe(res => this.recruits = res);
    }

    //  // Access the Data Service's getRecruits() method we defined
    //    // Access the Data Service's getUsers() method we defined
    //    this._dataService.getRecruits()
    //        .subscribe(res => {
    //            //for (let i = 0; i < res.length; i++) {
    //            //    dataSource.
    //            //}

    //            //this.dataSource.data.push( = res;
    //            return this.recruits = res
    //        });
    //}
    addRecruits() {
        console.log("function called");
    }
}

export class UserDataSource extends DataSource<any> {
    constructor(private _dataService: DataService) {
        super();
    }
    connect(): Observable<Recruit[]> {
        return this._dataService.getRecruits();
    }
    disconnect() { }
}

//export interface RecruitsData {
//    name: string;
//    phone: string;
//    email: string;
//    status: string;
//}

//const ELEMENT_DATA: RecruitsData[] = [
////    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
////    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
////    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
////    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
////    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
////    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
////    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
////    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
////    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
////    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
////    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
////    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
////    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
////    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
////    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
////    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
////    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
////    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
////    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
////    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
//];
