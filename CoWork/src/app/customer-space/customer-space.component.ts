import { Component, OnInit } from '@angular/core';
import {Profil} from "../_models/login";
import {NavigationEnd, Router} from "@angular/router";
import {AuthentificationService} from '../_services/authentification.service';

@Component({
  selector: 'app-customer-space',
  templateUrl: './customer-space.component.html',
  styleUrls: ['./customer-space.component.css']
})
export class CustomerSpaceComponent implements OnInit {

  currentUser: Profil;

  constructor(private router: Router, private auth: AuthentificationService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentUser = this.auth.currentUserValue[0];
        console.log(this.currentUser.profilDetail.firstName);
      }
    });
  }

  ngOnInit() {
  }

}
