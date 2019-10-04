import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConnectInfo, Profil} from '../_models/login';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {

  // URI = 'https://co-work-lrams.herokuapp.com';
  URI = 'http://127.0.0.1:5000';

  private logged = new BehaviorSubject<boolean>(false);
  private currentProfilSubject: BehaviorSubject<Profil>;
  currentProfil: Observable<Profil>;

  constructor(private http: HttpClient) {
    this.currentProfilSubject = new BehaviorSubject<Profil>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentProfil = this.currentProfilSubject.asObservable();
  }

  public get currentUserValue(): Profil {
    return this.currentProfilSubject.value;
  }

  public get isLogged() {
    return this.logged.asObservable();
  }


  public login(profilConnect: ConnectInfo) {
    return this.http.post<any>(`${this.URI}/login`, profilConnect)
      .pipe(map(profil => {
        if (profil) {
          localStorage.setItem('currentUser', JSON.stringify(profil));
          this.currentProfilSubject.next(profil);
          this.logged.next(true);
        }
        return profil;
      }));

  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.logged.next(false);
  }

}
