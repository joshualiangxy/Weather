import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Input() showWeather: boolean;
  @Input() cityName: string;
  @Input() onSubmitSearch: (event: Event) => Promise<object>;

  @Output() cityNameChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickTextInput = (event: Event): void => {
    event.stopPropagation();
  }

  onChangeTextInput = (event: any): void => {
    this.cityNameChange.emit(event.target.value);
  }

  onClickButton = (event: Event): void => {
    this.onSubmitSearch(event)
  }
}

