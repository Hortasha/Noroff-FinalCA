import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactService } from 'src/app/services/contact/contact.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;
  @Output() sendContact: EventEmitter<boolean>;
  formValid: boolean[] = [true, true, true, true];

  constructor(private contactService: ContactService) {
    this.sendContact = new EventEmitter<boolean>();
  }

  ngOnInit() {
    this.form = new FormGroup({
      fName: new FormControl(),
      lName: new FormControl(),
      phone: new FormControl(),
      mail: new FormControl()
    })
  }

  onSend(formValues: any) {
    this.formValid = this.contactService.validation(formValues);
    
    if(this.formValid[4]) {
      this.sendContact.emit(false);
    }
  }
}
