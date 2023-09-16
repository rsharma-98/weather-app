import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-weather-history',
  templateUrl: './weather-history.component.html',
  styleUrls: ['./weather-history.component.css']
})
export class WeatherHistoryComponent {
  @Input() previousData: any;
  @Output() getCordinateChange = new EventEmitter<object>();

  constructor() {}

  showHistory: boolean = false;

  selectLatLong(cord: any) {
    console.log('here', cord);
    this.getCordinateChange.emit(cord);
  }

  showWheatherHistory() {
    if (this.showHistory === false) {
      this.showHistory = true;
    } else {
      this.showHistory = false;
    }
  }

}
