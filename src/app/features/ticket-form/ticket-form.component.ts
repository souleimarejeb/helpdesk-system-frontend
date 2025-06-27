import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-form',
  imports: [],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent implements OnInit {
  ngOnInit(): void {
    console.log("i am in create form component")
  }

}
