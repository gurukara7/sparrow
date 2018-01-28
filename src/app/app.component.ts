import { Component, Input, Output, EventEmitter, ChangeDetectorRef  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { HttpModule } from '@angular/http';
import { MatTableDataSource, MatDialog, fadeInContent} from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

import { DataService } from './services/index';
import { AuthService } from './auth/auth.service';
import { Recruit } from './models/recruit.model';
import { AddRecruitComponent, UserProfileComponent} from './components/index';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private currentUserName : string;

    private showOptions: boolean = false;
    
    constructor(private authService: AuthService, private router: Router, private cd: ChangeDetectorRef, private dialog: MatDialog) {
        this.authService.userChange.subscribe((currentUser) => {
            if(currentUser){
                if(currentUser != null){    
                    this.currentUserName = currentUser.firstName;
                    this.showOptions = true;                    
                }
                else{
                    this.showOptions = false;
                    this.currentUserName = '';
                }
            } 
            else{
                this.showOptions = false;
                this.currentUserName = '';
            }

            this.cd.markForCheck();
        });        
    }

    private logOutClick(){
        this.authService.clearLoggedInUser();
        this.router.navigate(['/login'], { });
    }

    private updateProfile(){
        let dialogRef = this.dialog.open(UserProfileComponent, {
            width: '500px',
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
        });
    }
}