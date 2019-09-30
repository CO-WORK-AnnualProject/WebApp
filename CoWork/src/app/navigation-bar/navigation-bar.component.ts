import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AuthentificationService} from '../_services/authentification.service';
import {Profil} from '../_models/login';
import {Observable} from "rxjs";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  isLogged$: Observable<boolean>;
  currentUser: Profil;

  constructor(private router: Router, private auth: AuthentificationService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log('val instanceof NavigationEnd');
        this.isLogged$ = this.auth.isLogged;
        this.currentUser = this.auth.currentUserValue[0];
        console.log(this.currentUser.firstName);
        console.log(this.isLogged$);
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['home']).then(e => {
      if (e) {
        console.log('Déconnexion réussi, redirection vers l\'accueil');
      } else {
        console.log('Redirection vers l\'accueil a échoué');
      }
    });
  }

}
