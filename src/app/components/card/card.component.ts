import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MagicService } from 'src/app/services/magic/magic.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: any;

  constructor(
    private router: Router,
    private magicService: MagicService
  ) { }

  ngOnInit() {
  }

  viewCard() {
    this.magicService.setCard(this.card);
    this.router.navigate([`card/${this.card.multiverseid}`])
  }
}
