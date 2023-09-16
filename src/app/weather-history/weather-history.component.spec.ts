import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHistoryComponent } from './weather-history.component';

describe('WeatherHistoryComponent', () => {
  let component: WeatherHistoryComponent;
  let fixture: ComponentFixture<WeatherHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherHistoryComponent]
    });
    fixture = TestBed.createComponent(WeatherHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
