import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod'

@Component({
  selector: 'app-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.css']
})
export class WeatherPanelComponent implements OnInit {
  public cityName: string = '';
  public showWeather: boolean = true;
  public noResultFound: boolean = false;
  public searchResult: any = {};

  private apiKey: string = environment.API_KEY;
  private id: ReturnType<typeof setInterval>;

  public constructor() { }

  public ngOnInit(): void {
    const thirtySeconds: number = 30000;

    setTimeout(() => {
      this.id = setInterval(() => {
        this.refresh();
      }, thirtySeconds);
    }, thirtySeconds - (Date.now() % thirtySeconds));
  }

  public ngOnDestroy(): void {
    if (this.id) clearInterval(this.id);
  }

  public toggleDisplay = (): void => {
    this.showWeather = !this.showWeather;
  }

  public onSubmitSearch = async (event: Event): Promise<void> => {
    event.preventDefault();
    event.stopPropagation();

    this.noResultFound = false;

    const submittedSearch = this.cityName.trim();

    if (!submittedSearch) return Promise.resolve();

    return await fetch('https://api.openweathermap.org/data/2.5/'
        + `weather?q=${submittedSearch}&appid=${this.apiKey}&units=metric`)
      .then(data => data.json())
      .then(weatherData => {
        this.searchResult = weatherData;
        this.toggleDisplay();

        if (weatherData.name) this.cityName = '';
        else this.noResultFound = true;
      });
  }

  private refresh = async (): Promise<void> => {
    const search = this.searchResult.name;

    if (!search) return Promise.resolve();

    return await fetch('https://api.openweathermap.org/data/2.5/'
        + `weather?q=${search}&appid=${this.apiKey}&units=metric`)
      .then(data => data.json())
      .then(weatherData => {
        this.searchResult = weatherData;
      });
  }
}

