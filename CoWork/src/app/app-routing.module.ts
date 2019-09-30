import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './administration/administration.component';
import { CustomerSpaceComponent } from './customer-space/customer-space.component';
import { AuthentificationGuard } from './_guards/authentification.guard';
import { ContactComponent} from './contact/contact.component';
import { NotFoundComponent} from './not-found/not-found.component';
import { AboutComponent} from './about/about.component';
import { ServicesOfferedComponent} from './services-offered/services-offered.component';


const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: ConnectionComponent },
  { path: 'signup', component: RegistrationComponent },
  { path: 'administration', component: AdministrationComponent, canActivate: [AuthentificationGuard]},
  { path: 'customerSpace', component: CustomerSpaceComponent, canActivate: [AuthentificationGuard] },
  { path: 'services', component: ServicesOfferedComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
