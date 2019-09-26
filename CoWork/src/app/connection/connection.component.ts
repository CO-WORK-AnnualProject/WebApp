import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { ConnectInfo } from '../lib/login';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  loading = false;

  constructor(public login: LoginService) { }

  ngOnInit() {
  }

  onFormSubmit(userForm: NgForm) {
    const profilConnect: ConnectInfo = {
      email: userForm.value.inputEmail,
      password: userForm.value.inputPassword
    };

    this.login.login(profilConnect);

    console.log('=====>' + userForm.valid);
    console.log('=====>' + this.login.profil._id);
    if (this.login.profil.isLogged) {
      console.log('=====> ok il est cooo');
    } else {
      console.log('=====> Eh bah merde pas trouvé');
    }
  }

  onFormReset(userForm: NgForm) {
    userForm.resetForm();
  }

}
