import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  validation(formValues) {
    let valid: string = "";
    if((/^[a-z]{2,}$/i).test(formValues.fName) === false) {
      valid = "First name must be at least 2 characters long";
    }

    if((/^[a-z]{2,}$/i).test(formValues.lName) === false) {
      valid = "Last name must be at least 2 characters long";
    }

    if((/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/).test(formValues.phone) === false) {
      valid = "Make sure phone number is valid";
    }

    if((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm).test(formValues.mail) === false) {
      valid = "Check that your email is valid";
    }
    return valid;
  }
}
