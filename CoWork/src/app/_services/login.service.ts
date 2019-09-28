import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profil } from '../_models/login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URI = 'http://127.0.0.1:8081';

  constructor(private http: HttpClient) { }

  public register(profil: Profil) {
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
