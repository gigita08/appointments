import { Component } from '@angular/core';
import { AppointmentListComponent } from "./appointment-list/appointment-list.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AppointmentListComponent]
})
export class AppComponent {
  title = 'appointment-app';
}
