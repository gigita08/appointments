import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }