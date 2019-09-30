import { Component } from '@angular/core';
import {AuthentificationService} from './_services/authentification.service';
import {Profil} from './_models/login';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CoWork';
  public currentUser: Profil;

  constructor(private router: Router, private auth: AuthentificationService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log("val instanceof NavigationEnd");
        this.currentUser = this.auth.currentUserValue[0];
        console.log(this.currentUser.lastName);
      }
    });
  }

}
