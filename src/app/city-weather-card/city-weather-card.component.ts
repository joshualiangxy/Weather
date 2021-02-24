import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-city-weather-card',
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.css']
})
export class CityWeatherCardComponent implements OnInit {
  @Input() public hasResult: boolean;

  @Input() private cityName: string;
  @Input() private description: string;
  @Input() private temperature: number;
  @Input() private weatherIcon: IconDefinition;

  @Output() private editPressedChange: EventEmitter<boolean>
      = new EventEmitter<boolean>();

  private temperatureString: string;

  public constructor() { }

  public ngOnChanges(changes: SimpleChanges): void {
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

  public ngOnInit(): void { }

  private onClickEditButton = (event: Event): void => {
    event.preventDefault();
    event.stopPropagation();
    this.editPressedChange.emit(true);
  }
}

