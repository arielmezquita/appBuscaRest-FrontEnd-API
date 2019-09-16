import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restaurants = [];
  cities: any;
  ciudades = [];

  country: any;
  ciudadId: any;

  paises = [];

  constructor(public data: DataService) { }

  getRestaurant(ciudadId) {
    const eso = this.data.getRestaurant(this.ciudadId).subscribe((data: any) => {
    this.restaurants = data.restaurants;
    console.log(this.restaurants);
    });

  }
  getCiudades(country) {
    const eso = this.data.getCiudad(this.country).subscribe((data: any) => {
    this.cities = data;
    console.log(this.cities);
    for( let i = 0 ; i < this.cities.restaurants.length; i++ ) {

      if(this.ciudades.indexOf(this.cities.restaurants[i].city) === -1 ) {
        this.ciudades.push(this.cities.restaurants[i].city);
        console.log(this.cities.restaurants[i].city);
      }
     }

    });

  }
  getContry() {
  const esa = this.data.getCountry().subscribe((data: any) => {
    this.paises = data.countries;
    console.log(this.paises);
  });
  }

  ngOnInit() {
   this.getContry();
  }

}
