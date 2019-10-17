import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './administration/administration.component';
import { CustomerSpaceComponent } from './customer-space/customer-space.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlertService } from './_services/alert.service';
import { LoginService } from './_services/login.service';
import { AuthentificationService } from './_services/authentification.service';
import { AlertComponent } from './alert/alert.component';
import { AuthentificationGuard } from './_guards/authentification.guard';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { TicketFormAddComponent } from './ticket-form-add/ticket-form-add.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { EquipmentLoanFormComponent } from './equipment-loan-form/equipment-loan-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    RegistrationComponent,
    NavigationBarComponent,
    HomeComponent,
    AdministrationComponent,
    CustomerSpaceComponent,
    AlertComponent,
    ContactComponent,
    NotFoundComponent,
    AboutComponent,
    ServicesOfferedComponent,
    TicketFormAddComponent,
    BookingFormComponent,
    EquipmentLoanFormComponent
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
    AuthentificationGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
