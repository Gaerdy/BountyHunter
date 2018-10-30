import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

let map = document.getElementById("#map");
  // On initialise la latitude et la longitude de la Loupe (centre du monde)
  let L;
  var lat = 48.473918;
  var lon = 1.011958;
  var macarte = null;

  let housesDone = {
    "Paris": {
      "lat": 48.852969,
      "lon": 2.349903,
      "Candies": 15
    },
    "Brest": {
      "lat": 48.383,
      "lon": -4.500,
      "Candies": 10
    },
    "Quimper": {
      "lat": 48.000,
      "lon": -4.100,
      "Candies": 0
    },
    "Bayonne": {
      "lat": 43.500,
      "lon": -1.467,
      "Candies": 25
    }
  }
  // Fonction d'initialisation de la carte
  function initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 11);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      // Il est toujours bien de laisser le lien vers la source des données
      attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
      minZoom: 1,
      maxZoom: 20
    }).addTo(macarte);
    for (let house in housesDone) {
      let marker = L.marker([housesDone[house].lat, housesDone[house].lon]).addTo(macarte);
      marker.bindPopup("Nombre de bonbons" + housesDone[house].Candies);
    }
  }
  window.onload = function () {
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap();
  };

