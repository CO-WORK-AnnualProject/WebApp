import { Component, OnInit } from '@angular/core';
import {Ticket} from '../_models/ticket';
import {TicketService} from '../_services/ticket.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})

export class AdministrationComponent implements OnInit {

  tickets: Ticket[];

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.getAll()
      .subscribe(data => this.tickets = data);
  }

}
