import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ticket, TicketRegister} from '../_models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  // URI = 'https://co-work-lrams.herokuapp.com';
  URI = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  public add(ticket: TicketRegister) {
    return this.http.post(`${this.URI}/addTicket`, ticket);
  }

  public getAll() {
    return this.http.get<Ticket>(`${this.URI}/listTickets`);
  }
}
