import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './app.module.material';

// Import the Http Module and our Data Service
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,              // <-Add HttpModule
      MaterialModule
  ],
  providers: [DataService], // <-Add DataService
  bootstrap: [AppComponent]
})
export class AppModule { }