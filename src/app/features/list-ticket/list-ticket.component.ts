import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../core/services/ticket.service';
import { TicketRequest } from '../../core/models/TicketRequest';
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



}
