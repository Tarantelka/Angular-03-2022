import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import * as L from "leaflet";
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit, AfterViewInit, OnDestroy {
  
private map!: L.Map;
private lng = 59.4668;
private lat = 24.7327;
private zoom = 11;
private marker!: L.Marker;
private marker2!: L.Marker;

private initMap(): void {
  this.map = L.map('map', {
    center: [ this.lng, this.lat ],
    zoom: this.zoom
  });

  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.marker = L.marker([59.4246,24.7928]);           
    this.marker.addTo(this.map);
    this.marker.bindPopup("<div>Ülemiste keskus</div><br><div>Lahtioleku aeg: 9-20</div>");

    this.marker2= L.marker([59.4295,24.7224]);
    this.marker2.addTo(this.map);
    this.marker2.bindPopup("<div>Kristiine keskus</div><br><div>Lahtioleku aeg: 9-19</div>");

    }

  constructor() { }


  ngOnInit(): void {  }


  ngAfterViewInit(): void {
    this.initMap();
  }


  onZoomShop(shopName: string) {
    if (shopName === "kristiine") {
      this.map.setView(L.latLng([59.4295, 24.7224]),15);
      this.marker2.openPopup();  
    }
    else if (shopName === "ylemiste") {
      this.map.setView(L.latLng([59.4246, 24.7928]),15);
      this.marker.openPopup();
    }
    else {
      this.map.setView(L.latLng([59.4668, 24.7327]),11);
      this.marker.closePopup();
      this.marker2.closePopup();
    }
  }


  ngOnDestroy(): void { }

}
