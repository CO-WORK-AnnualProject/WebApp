import { Component, OnInit } from '@angular/core';
import {LoginService} from '../_services/login.service';
import {Profil} from '../_models/login';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})

export class AdministrationComponent implements OnInit {

  currentUser: Profil;

  constructor(private userService: LoginService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

}
