import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ConnectInfo, ProfilRegister} from '../_models/login';
import {first} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthentificationService} from '../_services/authentification.service';
import {AlertService} from '../_services/alert.service';
import {LoginService} from '../_services/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthentificationService,
    private loginService: LoginService,
    private alertService: AlertService) {}



  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  onFormSubmit(registerForm: NgForm) {
    const connectinfo: ConnectInfo = {
      email: registerForm.value.inputEmail.toLowerCase(),
      password: '',
    };

    const profilRegistration: ProfilRegister = {
      connectDetail: connectinfo,
      lastName: '',
      firstName: '',
      socityName: '',
      subscription: '',
      isEngaged: false,
      isStudent: false
    };

    // stop here if form is invalid
    if (registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.loginService.register(profilRegistration)
      .pipe(first())
      .subscribe(
        data => {
          if (data != null) {
            this.router.navigate(['signin']).then(e => {
              if (e) {
                console.log('Connection réussi, redirection vers la page de connexion');
              } else {
                console.log('Redirection vers la page de connexion a échoué');
              }
            });
          } else {
            this.alertService.error('Une erreur est survenu. Veuillez réessayer ultérieurement.');
          }

        },
        error => {
          this.alertService.error(error);
        });
    this.loading = false;
  }

}

/**
 * residentEngagement
 * residentNoEngagement
 * simpleEngagement
 * simpleNoEngagement
 * noAbo
 *
 *
 */
