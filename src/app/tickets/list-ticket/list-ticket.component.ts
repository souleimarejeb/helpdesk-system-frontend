import { Component } from '@angular/core';

@Component({
  selector: 'app-list-ticket',
  imports: [],
  templateUrl: './list-ticket.component.html',
  styleUrl: './list-ticket.component.css'
})
export class ListTicketComponent {
  tickets=[
    {
      status:'',
      type:'',
      created:'',
      attachement:'',
      transferredby :'',
      transferredfrom:'',
      comment:'',
      actions:''
    }

  ]

}
