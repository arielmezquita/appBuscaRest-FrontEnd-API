import { environment } from '../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  lat: any;
  long: any;

  locationmap = {};
  locationlat = {};
  locationlng = {};


  constructor(public activa: ActivatedRoute, public route: Router) { }

  ngOnInit() {

    this.activa.queryParams.subscribe(data => {
      if (Object.keys(data).length === 0) {
        this.locationmap = false;
      } else {
        this.locationmap = true;
        this.locationlat = data.lat;
        this.locationlng = data.lng;
      }
    });

    mapboxgl.accessToken = environment.mapbox
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 14,
      center: [this.locationlng, this.locationlat]
    });
    map.resize();

    const size = 150;

    var pulsingDot = {
    width: size,
    height: size,
    data: new Uint8Array(size * size * 4),

    onAdd: function() {
    var canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext('2d');
    },

    render: function() {
    var duration = 1000;
    var t = (performance.now() % duration) / duration;

    var radius = size / 2 * 0.3;
    var outerRadius = size / 2 * 0.7 * t + radius;
    var context = this.context;

    // draw outer circle
    context.clearRect(0, 0, this.width, this.height);
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
    context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
    context.fill();

    // draw inner circle
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
    context.fillStyle = 'rgba(255, 100, 100, 1)';
    context.strokeStyle = 'white';
    context.lineWidth = 2 + 4 * (1 - t);
    context.fill();
    context.stroke();

    // update this image's data with data from the canvas
    this.data = context.getImageData(0, 0, this.width, this.height).data;

    // keep the map repainting
    map.triggerRepaint();

    // return `true` to let the map know that the image was updated
    return true;
    }
    };


    map.on('load', () => {

      map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });

      map.addLayer({
      "id": "points",
      "type": "symbol",
      "source": {
      "type": "geojson",
      "data": {
      "type": "FeatureCollection",
      "features": [{
      "type": "Feature",
      "geometry": {
      "type": "Point",
      "coordinates": [this.locationlng, this.locationlat]
      }
      }]
      }
      },
      "layout": {
      "icon-image": "pulsing-dot"
      }
      });
      });
  }
}
