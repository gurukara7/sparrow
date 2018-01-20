import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DataService } from '../services/data.service';
import { AuthService } from '../auth/auth.service';
import { MatTableDataSource, MatDialog} from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Recruit } from '../models/recruit.model';
import { AddRecruitComponent} from '../components/addRecruit.component';
import { HttpModule } from '@angular/http';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    private usernameString: String;
    private passwrodString: String;
    private errorMessage: string;

    constructor(private _dataService: DataService, private _authService: AuthService,  private _router: Router) {
    }

    onLoginClick() : void {
        this._dataService.userLogin(this.usernameString, this.passwrodString).subscribe((returnedValue) => { 
            this._authService.setToken(returnedValue.token);
            this._router.navigate(['/home'], { });
        }, 
        error =>  this.errorMessage = error.error.message);   
    }
}
