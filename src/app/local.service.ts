import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  public saveData(key: string, value: string) {

    localStorage.setItem(key, JSON.stringify(value));
  }

  public getData(key: string) {
    const itm = localStorage.getItem(key) || '';
    return itm ? JSON.parse(itm): [];
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
