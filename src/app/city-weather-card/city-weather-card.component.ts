import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

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
  @Input() weatherIcon: any;
  @Output() editPressedChanges = new EventEmitter<boolean>();

  private temperatureString: string;
  private id: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        let change = changes[propName];

        switch (propName) {
          case 'temperature':
            this.temperatureString = `${change.currentValue}`
              + `${String.fromCharCode(176)}C`
            break;
        }
      }
    }
  }

  ngOnInit(): void { }

  onClickEditButton = (event: Event): void => {
    event.preventDefault();
    event.stopPropagation();
    this.editPressedChanges.emit(true);
  }
}
