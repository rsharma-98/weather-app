import { Component } from '@angular/core';
import { WeatherSearchService } from '../weather-search.service';
import { LocalService } from '../local.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private weatherAPI: WeatherSearchService, private localStore: LocalService) {
    
  }

  private readonly API_KEY = "ece8ffc1de470e5e8355544b221b8548"
  private readonly Limit = 10

  lat: number | undefined;
  long: number | undefined;
  weatherData: any | undefined;
  cordinateData: any | undefined;
  searchValue: any | undefined; 
  math = Math;
  Moment = moment;

  getLatLong(inp: string) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${inp}&limit=${this.Limit}&appid=${this.API_KEY}`;
    
    this.weatherAPI.getData(url).subscribe({
        next: (v: any) => {
          console.log('v', v);
          this.cordinateData = v;
          return v;
        },
        error: (e: any) => { 
          console.error(e);
          return e;
        },
        complete: () => console.info('feth complete') 
    });
    return this.cordinateData;
  }

  selectLatLong(cord: any) {
    let searchedData: any;
    searchedData = this.localStore.getData('searchedData') || [];

    this.searchValue = `${cord.name},${cord.state}, ${cord.country} (Lat:${cord.lat}, Long: ${cord.lon})`;
    this.lat = cord.lat;
    this.long = cord.lon;
    this.cordinateData = undefined;

    const isAlreadyExists = searchedData.findIndex((itm: any) => itm.lat === cord.lat && itm.lon === cord.lon);
    if (isAlreadyExists === -1) {
      searchedData.push(cord);
      this.localStore.saveData('searchedData', searchedData);
    }

    this.findWeather();
  }

  getSearchedValue(){
    const searchedData = this.localStore.getData('searchedData').reverse();
    return searchedData || [];
  }

  findWeather() {
    // Call API
    console.log('lat', this.lat, 'long', this.long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=0d0effe21ec2a1c34a83349c3c93b3da`;

    this.weatherAPI.getData(url).subscribe({
        next: (v: any) => {
          console.log('v', v);
          this.weatherData = v;
          return v;
        },
        error: (e: any) => { 
          console.error(e);
          return e;
        },
        complete: () => console.info('feth complete') 
    });
    
    return this.weatherData;
  }
}
