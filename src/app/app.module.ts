import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { LoginComponent, HomeComponent, AddRecruitComponent } from './components/index';
import { AuthService } from './auth/auth.service';
import { DataService } from './services/index';
import { AuthGuard, InterceptorModule } from './auth/index';

 
@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      AddRecruitComponent
  ],
  imports: [
      BrowserModule,
      AppRouting,
      HttpClientModule,
      MaterialModule,
      FormsModule,
      InterceptorModule
  ],
  providers: [
      DataService, 
      AuthService,
      AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [AddRecruitComponent]
})
export class AppModule { }