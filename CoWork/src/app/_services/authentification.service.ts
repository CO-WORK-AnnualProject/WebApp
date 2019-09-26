import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConnectInfo, Profil} from '../lib/login';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {
  URI = 'http://127.0.0.1:8081';
  profil: Observable<Profil>;

  constructor(private http: HttpClient) {
  }

  public login(profilConnect: ConnectInfo) {
    return this.http.post<Profil>(`${this.URI}/login`, profilConnect)
      .pipe(profil => {
        // login successful if there's a jwt token in the response
        if (profil != null) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(profil));
          this.profil = profil;
        }
        return profil;
      });

  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
