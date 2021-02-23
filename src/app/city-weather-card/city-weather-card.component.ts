import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-city-weather-card',
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.css']
})
export class CityWeatherCardComponent implements OnInit {
  @Input() cityName: string;
  @Input() description: string;
  @Input() temperature: number;
  @Input() hasResult: boolean;
  @Input() weatherIcon;
  @Output() editPressedChanges = new EventEmitter<boolean>();

  private temperatureString: string;

  constructor() { }

  ngOnChanges(): void {
    this.temperatureString = `${this.temperature}${String.fromCharCode(176)}C`;
  }

  ngOnInit(): void {
  }

  onClickEditButton = (event: Event): void => {
    event.preventDefault();
    event.stopPropagation();
    this.editPressedChanges.emit(true);
  }
}
