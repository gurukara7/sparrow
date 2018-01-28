import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataService } from '../services/data.service';
import { AuthService } from '../auth/auth.service';
import { MatTableDataSource, MatDialog} from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Recruit } from '../models/recruit.model';
import { AddRecruitComponent} from '../components/addRecruit.component';
import { HttpModule } from '@angular/http';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    dataSource_Desktop = new UserDataSource(this.dataService, this.authService );
    displayedColumns_Desktop = ['name', 'phone', 'email', 'status'];

    dataSource_Mobile = new UserDataSource(this.dataService, this.authService);
    displayedColumns_Mobile = ['name', 'status'];

    //// Create an instance of the DataService through dependency injection
    //constructor(private _dataService: DataService) {
    constructor(private dataService: DataService, private authService: AuthService, private dialog: MatDialog) {
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
                this.dataSource_Desktop = new UserDataSource(this.dataService, this.authService);
                this.dataSource_Mobile = new UserDataSource(this.dataService, this.authService);
            }
        });
    }
}

export class UserDataSource extends DataSource<any> {
    constructor(private dataService: DataService, private authService: AuthService,) {
        super();
    }
    connect(): Observable<Recruit[]> {
        return this.dataService.getRecruits(this.authService.getCurrentUserID());
    }
    disconnect() { }
}
