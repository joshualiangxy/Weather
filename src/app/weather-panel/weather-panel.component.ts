import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.css']
})
export class WeatherPanelComponent implements OnInit {
  public cityName: string = '';
  public showWeather: boolean = true;
  public noResultFound: boolean = false;
  public searchResult = {};
  private apiKey: string = environment.API_KEY;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleDisplay = (): void => {
    this.showWeather = !this.showWeather;
  }

  onSubmitSearch = async (event: Event) => {
    event.preventDefault();
    event.stopPropagation();

    this.noResultFound = false;

    const submittedSearch = this.cityName.trim();

    if (!submittedSearch) return Promise.resolve();

    return await fetch('http://api.openweathermap.org/data/2.5/'
        + `weather?q=${submittedSearch}&appid=${this.apiKey}&units=metric`)
      .then(data => data.json())
      .then(weatherData => {
        this.searchResult = weatherData;
        this.toggleDisplay();

        if (weatherData.name) this.cityName = '';
        else this.noResultFound = true;
      });
  }

  onShowWeatherChange = (showWeather: boolean): void => {
    this.showWeather = showWeather;
  }
}

