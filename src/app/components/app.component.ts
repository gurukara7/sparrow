import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataService } from '../services/data.service';
import { MatTableDataSource, MatDialog} from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Recruit } from '../models/recruit.model';
import { AddRecruitComponent} from '../components/addRecruit.component';
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
    constructor(private _dataService: DataService, private dialog: MatDialog) {
        //this._dataService.getRecruits()
        //    .subscribe(res => this.recruits = res);
    }

    addRecruits(): void {
        let dialogRef = this.dialog.open(AddRecruitComponent, {
            width: '500px',
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            if(result){
                //this.dataSource_Desktop..da.dataChange.value.push(this._dataService.getData());
            }
        });
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
