import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { FormInformationsComponent } from './form-informations/form-informations.component';
import { FormAboInformationsComponent } from './form-abo-informations/form-abo-informations.component';
import { AdministrationComponent } from './administration/administration.component';
import { CustomerSpaceComponent } from './customer-space/customer-space.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AlertService} from './_services/alert.service';
import {LoginService} from './_services/login.service';
import {AuthentificationService} from './_services/authentification.service';
import { AlertComponent } from './alert/alert.component';
import {AuthentificationGuard} from './_guards/authentification.guard';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    RegistrationComponent,
    NavigationBarComponent,
    HomeComponent,
    FormInformationsComponent,
    FormAboInformationsComponent,
    AdministrationComponent,
    CustomerSpaceComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AlertService,
    AuthentificationService,
    LoginService,
    AuthentificationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
