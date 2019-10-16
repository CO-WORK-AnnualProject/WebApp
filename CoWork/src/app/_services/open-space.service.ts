import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OpenSpace} from '../_models/open_space';

@Injectable({
  providedIn: 'root'
})

export class OpenSpaceService {

  // URI = 'https://co-work-lrams.herokuapp.com';
  URI = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<OpenSpace>(`${this.URI}/listOpenSpaces`);
  }
}
