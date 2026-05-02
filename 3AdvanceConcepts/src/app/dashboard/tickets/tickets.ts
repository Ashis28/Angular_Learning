import { Component, output } from '@angular/core';
import { NewTicket } from './new-ticket/new-ticket';
import { Ticket_ } from './ticket/ticket.model';
import { Ticket } from './ticket/ticket';
@Component({
  selector: 'app-tickets',
  imports: [NewTicket,Ticket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
    tickets : Ticket_[] = [];
    close = output();

   onAdd(ticketElement : {title : string , text : string}){
    const ticket_ : Ticket_ = {
      title : ticketElement.title,
      id : (Math.random() * 10).toString(),
      request : ticketElement.text,
      status : 'open',
    }

    this.tickets.push(ticket_);
   }

   onCloseTicket(id:string){
    this.tickets = this.tickets.map((ticket)=>
    {
      if(ticket.id===id){
        return {...ticket , status : 'close'}
      }
      return ticket;
    })
   }
}
