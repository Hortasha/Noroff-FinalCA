import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact/contact.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;
  message: string;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.form = new FormGroup({
      fName: new FormControl(),
      lName: new FormControl(),
      phone: new FormControl(),
      mail: new FormControl()
    })
  }

  onSend(formValues: any) {
    let validated = this.contactService.validation(formValues);
    if(validated.length === 0) {
      this.message = "Message Sendt";
    } else {
      this.message = validated;
    }
  }

}
