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
    private usernameString: string;
    private passwrodString: string;
    private errorMessage: string;

    constructor(private dataService: DataService, private authService: AuthService, private router: Router) {
    }

    onLoginClick() : void {
        this.dataService.userLogin(this.usernameString, this.passwrodString).subscribe((returnedValue) => { 
            this.authService.setUser(returnedValue);
            this.router.navigate(['/home'], { });
        }, 
        error =>  this.errorMessage = error.error.message);   
    }
}
