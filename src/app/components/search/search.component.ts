import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ParameterModel } from 'src/app/models/parameter.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchParameters: ParameterModel = {
    searchValue: '',
    rarity: ['common', 'uncommon', 'rare', 'mythic']
  }

  @Output() onSearch = new EventEmitter<ParameterModel>();

  constructor() { }

  ngOnInit() {
  }

  onKey(event) {
    this.searchParameters.searchValue = event.target.value;
  }

  onSubmit() {
    this.onSearch.emit(this.searchParameters);
  }
}
