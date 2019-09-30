import { Component, OnInit } from '@angular/core';
import {Profil} from '../_models/login';
import {AuthentificationService} from '../_services/authentification.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})

export class AdministrationComponent implements OnInit {

  currentUser: Profil;
  constructor(private router: Router, private auth: AuthentificationService) {
    router.events.subscribe((val) => {
      console.log('val instanceof NavigationEnd');
      console.log(val instanceof NavigationEnd);
    });
  }

  ngOnInit() {
  }

}
