import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( public http: HttpClient) {

  }

  getRestaurant(ciudadId) {
    const url = "http://opentable.herokuapp.com/";

    return this.http.get(url + "api/restaurants?city=" + ciudadId);
  }

  getCountry() {
    const apiUrl = "http://opentable.herokuapp.com/api/countries";

    return this.http.get(apiUrl);
  }

  getCiudad(country) {
    const url = "http://opentable.herokuapp.com/";

    return this.http.get(url + "api/restaurants?country=" + country);
  }
}
