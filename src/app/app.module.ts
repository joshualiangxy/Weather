import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherPanelComponent } from './weather-panel/weather-panel.component';
import { WeatherPanelContainerComponent } from './weather-panel-container/weather-panel-container.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { CityWeatherCardComponent } from './city-weather-card/city-weather-card.component';
import { NoCityCardComponent } from './no-city-card/no-city-card.component';
import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    WeatherPanelComponent,
    WeatherPanelContainerComponent,
    WeatherCardComponent,
    SearchFormComponent,
    CityWeatherCardComponent,
    NoCityCardComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

