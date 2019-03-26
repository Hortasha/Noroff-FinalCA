import { Component, OnInit } from '@angular/core';
import { MagicService } from 'src/app/services/magic/magic.service';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss']
})
export class CardsPageComponent implements OnInit {
  allCards: object[] = [];

  constructor(private magicService: MagicService) { }

  ngOnInit() {
    this.magicService.getData().subscribe((response:any) => {
      this.allCards = response;
      console.log(this.allCards);
    }, error => {
      console.error(error);
    })
  }

}
