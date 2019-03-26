import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MagicService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://api.magicthegathering.io/v1/cards');
  }
}
