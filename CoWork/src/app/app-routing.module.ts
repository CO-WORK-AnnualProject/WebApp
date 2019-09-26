import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormAboInformationsComponent } from './form-abo-informations/form-abo-informations.component';
import { AdministrationComponent } from './administration/administration.component';
import { CustomerSpaceComponent } from './customer-space/customer-space.component'
import {AuthentificationGuard} from './_guards/authentification.guard';


const routes: Routes = [
  { path: 'signin', component: ConnectionComponent },
  { path: 'signup', component: RegistrationComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthentificationGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthentificationGuard] },
  { path: 'abo', component: FormAboInformationsComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'customerSpace', component: CustomerSpaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
