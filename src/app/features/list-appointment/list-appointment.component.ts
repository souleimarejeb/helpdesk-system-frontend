import { Component } from '@angular/core';
import { CalendarComponent } from '../../shared/calendar/calendar.component';

@Component({
  selector: 'app-list-appointment',
  imports: [CalendarComponent],
  templateUrl: './list-appointment.component.html',
  styleUrl: './list-appointment.component.css'
})
export class ListAppointmentComponent {

}
