import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCityCardComponent } from './no-city-card.component';

describe('NoCityCardComponent', () => {
  let component: NoCityCardComponent;
  let fixture: ComponentFixture<NoCityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCityCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

