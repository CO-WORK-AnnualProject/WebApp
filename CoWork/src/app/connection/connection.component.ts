import {Component, OnInit} from '@angular/core';
import {ConnectInfo} from '../_models/login';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthentificationService} from '../_services/authentification.service';
import {first} from 'rxjs/operators';
import {AlertService} from '../_services/alert.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})

export class ConnectionComponent implements OnInit {
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthentificationService,
    private alertService: AlertService) {}

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  onFormSubmit(loginForm: NgForm) {
    const profilConnect: ConnectInfo = {
      email: loginForm.value.inputEmail.toLowerCase(),
      password: loginForm.value.inputPassword
    };

    // stop here if form is invalid
    if (loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(profilConnect)
      .pipe(first())
      .subscribe(
        data => {
/*          console.log(data[0]);
          console.log('connect component: ' + data);*/
          if (data != null) {
            this.router.navigate(['customerSpace']).then(e => {
              if (e) {
                console.log('Connection réussi, redirection vers l\'espace client');
              } else {
                console.log('Redirection vers l\'espace client a échoué');
              }
            });
          } else {
            this.alertService.error('Email ou mot de passe incorrect.');
            this.loading = false;
          }

        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
