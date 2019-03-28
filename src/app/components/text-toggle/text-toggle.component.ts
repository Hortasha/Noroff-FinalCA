import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-toggle',
  templateUrl: './text-toggle.component.html',
  styleUrls: ['./text-toggle.component.scss']
})
export class TextToggleComponent implements OnInit {

  display: boolean;

  constructor() {
    this.display = false;
  }

  ngOnInit() {
  }

  toggle() {
    this.display = !this.display;
  }

}
