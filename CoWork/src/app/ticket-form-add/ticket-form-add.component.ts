import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {TicketService} from '../_services/ticket.service';
import {OpenSpaceService} from '../_services/open-space.service';
import {LocalProfil, ProfilRegister} from '../_models/login';
import {OpenSpace} from '../_models/open_space';
import {NavigationEnd, Router} from '@angular/router';
import {AuthentificationService} from '../_services/authentification.service';
import {TicketRegister} from '../_models/ticket';
import {first} from 'rxjs/operators';
import {AlertService} from '../_services/alert.service';

@Component({
  selector: 'app-ticket-form-add',
  templateUrl: './ticket-form-add.component.html',
  styleUrls: ['./ticket-form-add.component.css']
})

export class TicketFormAddComponent implements OnInit {
  loading = false;
  currentUser: LocalProfil;
  openSpaceAttachedOnUser: OpenSpace;

  constructor(private router: Router,
              private ticketService: TicketService,
              private openSpaceService: OpenSpaceService,
              private alertService: AlertService,
              private authService: AuthentificationService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentUser = this.authService.currentUserValue[0];
      }
    });
  }

  ngOnInit() {
    this.openSpaceService.getById(this.currentUser.idOpenSpace)
      .subscribe(data => this.openSpaceAttachedOnUser = data[0]);
  }

  onFormSubmit(ticketForm: NgForm) {
    this.loading = true;

    if (ticketForm.invalid) {
      alert('Vérifier tous les champs');
      this.loading = false;
      return;
    }

    const ticketRegister: TicketRegister = {
      objet: ticketForm.value.inputObject,
      description: ticketForm.value.inputDescription,
      equipment: ticketForm.value.selectEquipement,
      status: 'Nouveau',
      id_open_space: this.openSpaceAttachedOnUser._id,
    };

    this.ticketService.add(ticketRegister)
      .pipe(first())
      .subscribe(
        data => {
          if (data != null) {
            this.router.navigate(['customerSpace']).then(e => {
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
