import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherSearchService {
 
  constructor(private http: HttpClient) {
      
  }
  public getData(url: string, options?: any) { 
    return this.http.get(url, options);
  }
 
  public postData(url: string, data: any, options?: any) { 
    return this.http.post(url, data, options).subscribe({
      next: (v: any) => {
        console.log(v);
        return v;
      },
      error: (e: any) => { 
        console.error(e);
        return e;
      },
      complete: () => console.info('feth complete') 
  }); 
  }
}
