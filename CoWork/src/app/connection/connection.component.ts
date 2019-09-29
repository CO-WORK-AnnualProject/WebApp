import {Component, OnInit} from '@angular/core';
import {ConnectInfo} from '../_models/login';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthentificationService} from '../_services/authentification.service';
import {first} from 'rxjs/operators';
import {AlertService} from '../_services/alert.service';
import {isLowerCase} from "tslint/lib/utils";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})

export class ConnectionComponent implements OnInit {
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthentificationService,
    private alertService: AlertService) {}

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = 'administration';
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
          console.log(data);
          console.log('connect component: ' + data);
          if (data != null) {
            this.router.navigate([this.returnUrl]);
            this.alertService.success('Good!');
          } else {
            // alert('Email ou mot de passe incorrect.');
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
