import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-ticket-form-add',
  templateUrl: './ticket-form-add.component.html',
  styleUrls: ['./ticket-form-add.component.css']
})

export class TicketFormAddComponent implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(loginForm: NgForm) {

  }
}
