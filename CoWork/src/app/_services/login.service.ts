import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Profil, ProfilRegister} from '../_models/login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URI = 'https://co-work-lrams.herokuapp.com';
  // URI = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  public register(profil: ProfilRegister) {
    return this.http.post(`${this.URI}/addUser`, profil);
  }

  public update(profil: Profil) {
    return this.http.put(`${this.URI}/updateUser/` + profil._id, profil);
  }

  public delete(id: number) {
    return this.http.delete(`${this.URI}/deleteUser/` + id);
  }

  public getById(id: number) {
    return this.http.get<Profil>(`${this.URI}/listUsers/` + id);
  }

}
