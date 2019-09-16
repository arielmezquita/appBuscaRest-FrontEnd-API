import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  detalle = {};
  constructor(public activa: ActivatedRoute, public route: Router) { }






  ngOnInit() {
    this.activa.queryParams.subscribe(data => {
      if (Object.keys(data).length === 0) {
        this.detalle = false;
      } else {
        this.detalle = data;
      }
    });
  }

}
