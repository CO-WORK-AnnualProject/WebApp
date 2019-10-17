import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BookingRegister} from '../_models/booking';

@Injectable({
  providedIn: 'root'
})

export class BookingService {

  URI = 'https://co-work-lrams.herokuapp.com';
  // URI = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  public add(booking: BookingRegister) {
    return this.http.post(`${this.URI}/addBooking`, booking);
  }

  public getAll(): Observable<BookingRegister[]> {
    return this.http.get<BookingRegister[]>(`${this.URI}/listBookings`);
  }
}
