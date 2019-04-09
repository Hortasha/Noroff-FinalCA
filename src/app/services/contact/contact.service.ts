import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  validation(formValues) {
    let valid: boolean[] = [true, true, true, true, true];
    if((/^[a-z]{2,}$/i).test(formValues.fName) === false || formValues.fName === null) {
      valid[0] = false;
      valid[4] = false;
    }

    if((/^[a-z]{2,}$/i).test(formValues.lName) === false || formValues.lName === null) {
      valid[1] = false;
      valid[4] = false;
    }

    if((/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]{4,25}$/).test(formValues.phone) === false) {
      valid[2] = false;
      valid[4] = false;
    }

    if((/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/).test(formValues.mail) === false) {
      valid[3] = false;
      valid[4] = false;
    }
    return valid;
  }
}
