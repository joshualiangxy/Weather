import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faCloud,
  faCloudMoon,
  faCloudMoonRain,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudSun,
  faCloudSunRain,
  faMoon,
  faSnowflake,
  faSun,
  faWind,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() public showWeather: boolean;

  @Input() private noResultFound: boolean;
  @Input() private searchResult: any;

  @Output() private showWeatherChange: EventEmitter<boolean>
      = new EventEmitter<boolean>();

  private cityName: string;
  private description: string;
  private iconString: string;
  private temperature: number;
  private hasResult: boolean;
  private editPressed: boolean = false;
  private weatherIcon: IconDefinition;

  public constructor() { }

  public ngOnInit(): void { }

  public ngOnChanges(): void {
    this.cityName = this.searchResult.name;
    this.hasResult = !!this.cityName;
    this.weatherIcon = faSun;

    if (this.hasResult) {
      this.iconString = this.searchResult.weather[0].icon;

      this.temperature = this.searchResult.main.temp;
      this.description = this.searchResult.weather[0].description
        .split(' ')
        .map((word: string) => word[0].toUpperCase() + word.substr(1))
        .join(' ');

      switch (this.iconString) {
        case '01n':
          this.weatherIcon = faMoon;
          break;
        case '02d':
          this.weatherIcon = faCloudSun;
          break;
        case '02n':
          this.weatherIcon = faCloudMoon;
          break;
        case '03d':
        case '03n':
        case '04d':
        case '04n':
          this.weatherIcon = faCloud;
          break;
        case '09d':
        case '09n':
          this.weatherIcon = faCloudRain;
          break;
        case '10d':
          this.weatherIcon = faCloudSunRain;
          break;
        case '10n':
          this.weatherIcon = faCloudMoonRain;
          break;
        case '11d':
        case '11n':
          this.weatherIcon = faCloudShowersHeavy;
          break;
        case '13d':
        case '13n':
          this.weatherIcon = faSnowflake;
          break;
        case '50d':
        case '50n':
          this.weatherIcon = faWind;
          break;
        default:
          break;
      }
    }
  }

  private toggleDisplay = (event: Event): void => {
    if (this.hasResult) event.stopPropagation();
  }

  private onEditPressed = (editPressed: boolean): void => {
    if (editPressed) this.showWeatherChange.emit(false);
    editPressed = false;
  }
}

