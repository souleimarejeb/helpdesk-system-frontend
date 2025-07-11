import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TicketService } from '../../core/services/ticket.service';
import { TicketRequest } from '../../core/models/TicketRequest';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-ticket-form',
  imports: [
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent implements OnInit {
  ticketForm!: FormGroup;
  ticket!: TicketRequest;
  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService
  ) {

    this.ticketForm = this.fb.group({
      title: ['', Validators.required],
      type: ['', [Validators.required]],
      // category: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      description: ['', [Validators.required]],

    });
  }

  ngOnInit(): void {
    console.log("i am in create form component")
  }
  onSubmit(): void {
    if (this.ticketForm.valid) {
      const ticketData = this.ticketForm.value
      console.log('Form Data:', this.ticketForm.value); // Form values on submission
      this.ticketService.createTicket(ticketData, "2").subscribe(
        (response) => {
          console.log('Ticket created successfully:', response);

        },
        (error) => {
          console.error('Error creating ticket:', error);
        }
      );
    }
    console.log("after the submission if it is a success else error ")
  }
}
