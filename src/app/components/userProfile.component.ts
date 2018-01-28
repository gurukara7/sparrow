import {Component, ChangeDetectorRef, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DataService } from '../services/data.service';
import { AuthService } from '../auth/auth.service';
import { Recruit } from '../models/recruit.model';

@Component({
    selector: 'user-profile-dialog',
    templateUrl: 'userProfile.component.html',
})
export class UserProfileComponent {
    userID: Number;
    userName: string;
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    errorMessage: string;

    constructor(private dialogRef: MatDialogRef<UserProfileComponent>, 
                private authService: AuthService,
                private cd: ChangeDetectorRef,
        @Inject(MAT_DIALOG_DATA) private data: any, private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getUserDetails(this.authService.getCurrentUserID()).subscribe(
            (returnedValue) => { 
                this.userID = returnedValue.userID;
                this.userName = returnedValue.userName;
                this.firstName = returnedValue.firstName;
                this.lastName = returnedValue.lastName;
                this.fullName = returnedValue.fullName;
                this.email = returnedValue.email;

                this.cd.markForCheck();                
            }, 
            error => this.errorMessage = error.message
        );   
    };


    onNoClick(): void {
        this.dialogRef.close();
    }

    onSaveClick() : void {
        let updatedUser = {
            userID: this.userID,
            userName: this.userName,
            firstName: this.firstName,
            lastName: this.lastName,
            fullName: this.fullName,
            email: this.email,
            token: ""
        };

        this.dataService.updateUser(updatedUser).subscribe(
            (returnedValue) => { 
                return this.dialogRef.close(returnedValue); 
            }, 
            error => this.errorMessage = error.message
        );  
    }
}