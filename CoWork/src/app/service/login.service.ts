import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profil, ConnectInfo } from '../lib/login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  profil: Profil;

  URI = 'https://127.0.0.1:8081/';

  constructor(private http: HttpClient) {
    const profilConnect: ConnectInfo = {
        email: 'loghan.r@gmail.com',
        password: '123456'
      };
    this.loginConnect(profilConnect);
  }

  loginConnect(profilConnect: ConnectInfo): void {
    this.http.post<Profil>(this.URI + 'login', profilConnect, httpOptions)
      .subscribe(result => {
          this.profil = result;
        },
        console.error
      );
  }


}
