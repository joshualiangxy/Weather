import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Input() public showWeather: boolean;

  @Input() private cityName: string;
  @Input() private onSubmitSearch: (event: Event) => Promise<object>;

  @Output() private cityNameChange: EventEmitter<string>
      = new EventEmitter<string>();

  public constructor() { }

  public ngOnInit(): void { }

  private onClickTextInput = (event: Event): void => {
    event.stopPropagation();
  }

  private onChangeTextInput = (event: Event): void => {
    this.cityNameChange.emit((event.target as HTMLInputElement).value);
  }

  private onClickButton = (event: Event): void => {
    this.onSubmitSearch(event)
  }
}

