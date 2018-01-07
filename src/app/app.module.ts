import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './components/app.component';
import { AddRecruitComponent } from './components/addRecruit.component';
import { MaterialModule } from './modules/material.module';

// Import the Http Module and our Data Service
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
      AppComponent,
      AddRecruitComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      MaterialModule,
      FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [AddRecruitComponent]
})
export class AppModule { }