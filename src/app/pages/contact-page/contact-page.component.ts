import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  displayForm: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  sendt(event) {
    this.displayForm = event;
  }

}
