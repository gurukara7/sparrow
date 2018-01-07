import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DataService } from '../services/data.service';
import { Recruit } from '../models/recruit.model';

@Component({
    selector: 'add-recruits-dialog',
    templateUrl: 'addRecruit.component.html',
})
export class AddRecruitComponent {

    // name: string;
    // phone: string;
    // email: string;
    // DOJ: Date;
    // newRecruit: any;
    errorMessage: string;

    constructor(private dialogRef: MatDialogRef<AddRecruitComponent>, 
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
            DOJ: this.data.DOJ
        };

        this._dataService.addRecruit(newRecruit).subscribe((returnedValue) => { return this.dialogRef.close(returnedValue); }, 
            error => this.errorMessage = error.message);   
        }
}