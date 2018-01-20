import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpModule } from '@angular/http';
import { MatTableDataSource, MatDialog} from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

import { DataService } from './services/index';
import { Recruit } from './models/recruit.model';
import { AddRecruitComponent} from './components/index';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
}