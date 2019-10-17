import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ConnectInfo, ProfilRegister} from '../_models/login';
import {first} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthentificationService} from '../_services/authentification.service';
import {AlertService} from '../_services/alert.service';
import {LoginService} from '../_services/login.service';
import {mustMatch} from '../_helpers/must-match.validator';
import {OpenSpace} from '../_models/open_space';
import {OpenSpaceService} from '../_services/open-space.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  loading = false;
  arePasswordSame = true;
  acceptGeneralCondition = true;
  isEngaged = false;
  isStudent = false;
  openSpaces: OpenSpace[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthentificationService,
    private loginService: LoginService,
    private alertService: AlertService,
    private openSpace: OpenSpaceService) {
  }

  ngOnInit() {
    this.authenticationService.logout();
    this.openSpace.getAll()
      .subscribe(data => this.openSpaces = data);
  }

  onFormSubmit(registerForm: NgForm) {
    this.loading = true;

    this.isEngaged = registerForm.value.radioOptions.toString().indexOf('_Engagement') > 0;
    this.isStudent = registerForm.value.student != null && registerForm.value.student !== '';

    this.arePasswordSame = mustMatch(registerForm.value.inputPassword, registerForm.value.inputConfirmPassword);
    this.acceptGeneralCondition = registerForm.value.generalCondition != null && registerForm.value.generalCondition !== '';

    if (registerForm.invalid || !this.arePasswordSame || !this.acceptGeneralCondition) {
      alert('Vérifier tous les champs');
      this.loading = false;
      return;
    }

    //

    const connectInfo: ConnectInfo = {
      email: registerForm.value.inputEmail.toLowerCase(),
      password: registerForm.value.inputPassword,
    };

    const profilRegistration: ProfilRegister = {
      connectDetail: connectInfo,
      lastName: registerForm.value.inputLastName,
      firstName: registerForm.value.inputFirstName,
      socityName: registerForm.value.inputSocietyName,
      subscription: registerForm.value.radioOptions.toString().replace('_Engagement', ''),
      isEngaged: this.isEngaged,
      isStudent: this.isStudent,
      idOpenSpace: registerForm.value.selectOpenSpace
    };

    //

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
