/* import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  recruits = [{name:"guru"}];
}

*/


//import { Component } from '@angular/core';

//// Import the DataService
//import { DataService } from './data.service';

//@Component({
//  selector: 'app-root',
//  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.css']
//})
//export class AppComponent {
//  //title = "Guru";
//  // Define a users property to hold our user data
//  //recruits = [{"_id":"5a44c0e0734d1d45eaf35204","name":"Guru","number":9480614620,"joining":false},{"_id":"5a44e9a3734d1d45eaf3657c","name":"Raja","number":9480614621,"joining":true}];
//  recruits : Array<any>;

//  // Create an instance of the DataService through dependency injection
//  constructor(private _dataService: DataService) {

//    // Access the Data Service's getRecruits() method we defined
//      // Access the Data Service's getUsers() method we defined
//      this._dataService.getRecruits()
//          .subscribe(res => this.recruits = res);
//  }
//}

//import {MatButtonModule, MatCheckboxModule} from '@angular/material';

//@NgModule({
//    imports: [MatButtonModule, MatCheckboxModule],
//})
//export class AppMaterialComponent { }


////import './polyfills';
//import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
//import {BrowserModule} from '@angular/platform-browser';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {NgModule} from '@angular/core';
//import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import {
//    MatAutocompleteModule,
//    MatButtonModule,
//    MatButtonToggleModule,
//    MatCardModule,
//    MatCheckboxModule,
//    MatChipsModule,
//    MatDatepickerModule,
//    MatDialogModule,
//    MatExpansionModule,
//    MatGridListModule,
//    MatIconModule,
//    MatInputModule,
//    MatListModule,
//    MatMenuModule,
//    MatNativeDateModule,
//    MatPaginatorModule,
//    MatProgressBarModule,
//    MatProgressSpinnerModule,
//    MatRadioModule,
//    MatRippleModule,
//    MatSelectModule,
//    MatSidenavModule,
//    MatSliderModule,
//    MatSlideToggleModule,
//    MatSnackBarModule,
//    MatSortModule,
//    MatTableModule,
//    MatTabsModule,
//    MatToolbarModule,
//    MatTooltipModule,
//    MatStepperModule,
//} from '@angular/material';
////import {DialogOverviewExample, DialogOverviewExampleDialog} from './app/dialog-overview-example';
////import {HttpModule} from '@angular/http';
//import {CdkTableModule} from '@angular/cdk/table';

//@NgModule({
//    exports: [
//        CdkTableModule,
//        MatAutocompleteModule,
//        MatButtonModule,
//        MatButtonToggleModule,
//        MatCardModule,
//        MatCheckboxModule,
//        MatChipsModule,
//        MatStepperModule,
//        MatDatepickerModule,
//        MatDialogModule,
//        MatExpansionModule,
//        MatGridListModule,
//        MatIconModule,
//        MatInputModule,
//        MatListModule,
//        MatMenuModule,
//        MatNativeDateModule,
//        MatPaginatorModule,
//        MatProgressBarModule,
//        MatProgressSpinnerModule,
//        MatRadioModule,
//        MatRippleModule,
//        MatSelectModule,
//        MatSidenavModule,
//        MatSliderModule,
//        MatSlideToggleModule,
//        MatSnackBarModule,
//        MatSortModule,
//        MatTableModule,
//        MatTabsModule,
//        MatToolbarModule,
//        MatTooltipModule,
//    ]
//})
//export class AllMaterialModule { }

//@NgModule({
//    imports: [
//        BrowserModule,
//        BrowserAnimationsModule,
//        FormsModule,
//        //HttpModule,
//        AllMaterialModule,
//        MatNativeDateModule,
//        ReactiveFormsModule,
//    ],
//    //entryComponents: [DialogOverviewExample, DialogOverviewExampleDialog],
//    //declarations: [DialogOverviewExample, DialogOverviewExampleDialog],
//    //bootstrap: [DialogOverviewExample],
//    providers: []
//})
//export class MaterialModule { }


import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatStepperModule} from '@angular/material';

@NgModule({
    imports: [MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatStepperModule,
        BrowserAnimationsModule],
    exports: [MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatStepperModule,
        BrowserAnimationsModule]
})
export class MaterialModule { }