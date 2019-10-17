import { Component, OnInit } from '@angular/core';
import {LocalProfil} from '../_models/login';
import {NavigationEnd, Router} from '@angular/router';
import {AuthentificationService} from '../_services/authentification.service';
import {OpenSpaceService} from '../_services/open-space.service';
import {OpenSpace} from '../_models/open_space';

@Component({
  selector: 'app-customer-space',
  templateUrl: './customer-space.component.html',
  styleUrls: ['./customer-space.component.css']
})
export class CustomerSpaceComponent implements OnInit {

  currentUser: LocalProfil;
  openSpaceAttachedOnUser: OpenSpace;


  constructor(private router: Router, private auth: AuthentificationService, private openSpace: OpenSpaceService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentUser = this.auth.currentUserValue[0];
        console.log('jesuis');
      }
    });
  }

  ngOnInit() {
    this.openSpace.getById(this.currentUser.idOpenSpace)
      .subscribe(data => this.openSpaceAttachedOnUser = data[0]);
  }

}
