import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profil, ConnectInfo } from '../lib/login';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  profil: Profil;

  URI = 'http://127.0.0.1:8081';

  constructor(private http: HttpClient) {
    // this.loginConnect(profilConnect);
/*    const profilConnect: ConnectInfo = {
      email: 'loghan.r@gmail.com',
      password: '123456'
    };
    this.loginConnect(profilConnect);*/
  }

  public login(profilConnect: ConnectInfo) {
    return this.http.post<Profil>(`${this.URI}/login`, profilConnect)
      .pipe(map(profil => {
        // login successful if there's a jwt token in the response
        if (profil && profil._id) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(profil));
        }
        return profil;
      }));

  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  public register(profil: Profil) {
    return this.http.post(`${this.URI}/addUser`, profil);
  }

  public update(profil: Profil) {
    return this.http.put(`$${this.URI}/updateUser/` + profil._id, profil);
  }

  public delete(id: number) {
    return this.http.delete(`${this.URI}/deleteUser/` + id);
  }


  public displayOneUser(): void {
    this.http.get<Profil>(`${this.URI}/listUsers/5d729ab40cad410f080b5c83`)
      .subscribe(result => {
        this.profil = result[0];
        console.log('======>' + this.profil._id);
        },
        console.error
      );

  }
  public getById(id: number) {
    return this.http.get<Profil>(`${this.URI}/listUsers/` + id);
  }


}
