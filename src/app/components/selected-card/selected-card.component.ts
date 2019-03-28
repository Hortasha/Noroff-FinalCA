import { Component, OnInit } from '@angular/core';
import { MagicService } from 'src/app/services/magic/magic.service';

@Component({
  selector: 'app-selected-card',
  templateUrl: './selected-card.component.html',
  styleUrls: ['./selected-card.component.scss']
})
export class SelectedCardComponent implements OnInit {

  card: any;

  constructor(
    private magicService: MagicService
  ) { }

  ngOnInit() {
    this.card = this.magicService.getCard();
  }

}
