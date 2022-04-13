import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
       // set defaults here
       radius: 100,
       outerStrokeWidth: 16,
       innerStrokeWidth: 8,
       outerStrokeColor: "#78C000",
       innerStrokeColor: "#C7E596",
       animationDuration: 300,

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
