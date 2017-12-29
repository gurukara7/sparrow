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


import { Component } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = "Guru";
  // Define a users property to hold our user data
  //recruits = [{"_id":"5a44c0e0734d1d45eaf35204","name":"Guru","number":9480614620,"joining":false},{"_id":"5a44e9a3734d1d45eaf3657c","name":"Raja","number":9480614621,"joining":true}];
  recruits : Array<any>;

  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {

    // Access the Data Service's getRecruits() method we defined
      // Access the Data Service's getUsers() method we defined
      this._dataService.getRecruits()
          .subscribe(res => this.recruits = res);
  }
} 