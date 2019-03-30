import { Component, OnInit } from '@angular/core';
import { MagicService } from 'src/app/services/magic/magic.service';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss']
})
export class CardsPageComponent implements OnInit {
  allCards: object[] = [];
  loading: boolean;

  constructor(private magicService: MagicService) { }

  ngOnInit() {
    this.loading = true;
    this.magicService.getMagic().subscribe((response:any) => {
      this.allCards = response.cards.filter(card => card.imageUrl);
      this.loading = false;
    }, error => {
      console.error(error);
    })
  }

  
  search(para) {
    this.loading = true;
    this.allCards = [];
    this.magicService.getSearch(para).subscribe((response:any) => {
      this.allCards = response.cards.filter(card => card.imageUrl);
      this.loading = false;
    }, error => {
      console.error(error);
    })
  }  
}