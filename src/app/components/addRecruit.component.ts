import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DataService } from '../services/data.service';
import { AuthService } from '../auth/auth.service';
import { Recruit } from '../models/recruit.model';

@Component({
    selector: 'add-recruits-dialog',
    templateUrl: 'addRecruit.component.html',
})
export class AddRecruitComponent {

    errorMessage: string;

    constructor(private dialogRef: MatDialogRef<AddRecruitComponent>, 
                private _authService: AuthService,
        @Inject(MAT_DIALOG_DATA) private data: any, private _dataService: DataService) { }

    ngOnInit() {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSaveClick(): void {
        let newRecruit = {
            name : this.data.name,
            phone : this.data.phone,
            email : this.data.email,
            joining: true,
            DOJ: this.data.DOJ,
            addedByUserID: this._authService.getCurrentUserID()
        };

        this._dataService.addRecruit(newRecruit).subscribe(
            (returnedValue) => { 
                return this.dialogRef.close(returnedValue); 
            }, 
            error => this.errorMessage = error.message
        );   
    }
}