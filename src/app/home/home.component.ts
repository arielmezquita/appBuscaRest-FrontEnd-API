import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restaurants = [];
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
    this.ciudades = data.restaurants;
    console.log(this.ciudades);
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
