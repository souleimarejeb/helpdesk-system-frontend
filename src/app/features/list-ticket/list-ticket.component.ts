import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../core/services/ticket.service';
import { CommonModule } from '@angular/common';
import { TicketResponse } from '../../core/models/TicketResponse';

@Component({
  selector: 'app-list-ticket',
  imports: [CommonModule],
  templateUrl: './list-ticket.component.html',
  styleUrl: './list-ticket.component.css'
})
export class ListTicketComponent implements OnInit {


  tickets: TicketResponse[] = [];
  userId = '2';

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this._fetchData("2");
  }

  _fetchData(id: string) {
    this.ticketService.getAllByUserId(id).subscribe({
      next: (data: TicketResponse[]) => {
        this.tickets = data;
      },
      error: (error) => {
        console.error('Error fetching tickets', error);
      }
    });
  }

  toggleStatus(ticket: TicketResponse): void {

    const originalStatus = ticket.status;
    if (originalStatus === 'Solved') {

      ticket.status = ticket.status === 'Closed' ? 'Pending' : 'Closed';
      this.ticketService.updateTicketStatus(ticket.ticketId, { status: ticket.status }, this.userId).subscribe({
        next: () => {
          console.log("Status updated successfully.");

        },
        error: (err) => {
          ticket.status = originalStatus;
          console.error('Failed to update ticket status', err);
          alert('Failed to update status. Please try again.');
        }
      });
    }
  }


}
