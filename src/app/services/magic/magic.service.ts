import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MagicService {

  selectedCard: any;

  constructor(private http: HttpClient) { }

  getMagic() {
    return this.http.get('https://api.magicthegathering.io/v1/cards');
    //https://docs.magicthegathering.io/
    //https://api.magicthegathering.io/v1/cards?name=Ajani,+Adversary+of+Tyrants
  }

  getSearch(parameters) {
    let filteredRarity = parameters.rarity.filter(item => (item.length > 0));
    let rarity = filteredRarity.join('|')
    let name = parameters.searchValue.trim().split(" ").join("+");
    return this.http.get(`https://api.magicthegathering.io/v1/cards?name=${name}&rarity=${rarity}`)
  }

  setCard(card) {
    this.selectedCard = card;
  }

  getCard() {
    return this.selectedCard;
  }
}
