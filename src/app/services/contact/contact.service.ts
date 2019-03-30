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

    if((/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/).test(formValues.phone) === false) {
      valid[2] = false;
      valid[4] = false;
    }

    if((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm).test(formValues.mail) === false) {
      valid[3] = false;
      valid[4] = false;
    }
    return valid;
  }
}
