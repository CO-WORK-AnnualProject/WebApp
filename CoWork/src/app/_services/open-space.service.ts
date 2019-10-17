import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OpenSpace} from '../_models/open_space';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OpenSpaceService {

  URI = 'https://co-work-lrams.herokuapp.com';
  // URI = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<OpenSpace[]> {
    return this.http.get<OpenSpace[]>(`${this.URI}/listOpenSpaces`);
  }

  public getById(id: string): Observable<OpenSpace> {
    return this.http.get<OpenSpace>(`${this.URI}/listOpenSpaces/` + id);
  }
}
