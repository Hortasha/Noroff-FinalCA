import { Component, OnInit } from '@angular/core';
import { MagicService } from 'src/app/services/magic/magic.service';

@Component({
  selector: 'app-selected-card',
  templateUrl: './selected-card.component.html',
  styleUrls: ['./selected-card.component.scss']
})
export class SelectedCardComponent implements OnInit {

  card: any;
  mana: string = '';

  constructor(
    private magicService: MagicService
  ) { }

  ngOnInit() {
    this.card = this.magicService.getCard();

    if(this.card.manaCost) {
      this.getMana(this.card.manaCost);
    }
  }

  getMana(mana) {
    let manaRegex: RegExp = /[{}]/;
    let manaList = mana.split(manaRegex).filter(item => item !== "")
    if(parseInt(manaList[0])) {
      let manaNum = parseInt(manaList[0]);
      console.log(manaNum)
      manaNum += manaList.length - 1;
      manaList.shift();
      this.mana += manaNum + " mana. Including: "
    }
    this.mana += manaList.join(', ')
  }
}
