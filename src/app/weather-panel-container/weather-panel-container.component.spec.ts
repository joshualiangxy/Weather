import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPanelContainerComponent } from './weather-panel-container.component';

describe('WeatherPanelContainerComponent', () => {
  let component: WeatherPanelContainerComponent;
  let fixture: ComponentFixture<WeatherPanelContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherPanelContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPanelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
