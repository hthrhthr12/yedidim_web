import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {
    this.cardItems = [
     
    ];

  }
}


// import { Component } from '@angular/core';
// import { IonicPage, NavController } from 'ionic-angular';
// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   GoogleMapOptions,
//   CameraPosition,
//   MarkerOptions,
//   Marker,
//   Environment
// } from '@ionic-native/google-maps';

// @IonicPage()
// @Component({
//   selector: 'page-map',
//   templateUrl: 'map.html'
// })
// export class MapPage {
//   map: GoogleMap;
//   constructor() { }

//   ionViewDidLoad() {
//     this.loadMap();
//   }

//   loadMap() {

//     // This code is necessary for browser
//     Environment.setEnv({
//       'API_KEY_FOR_BROWSER_RELEASE': '(your api key for `https://`)',
//       'API_KEY_FOR_BROWSER_DEBUG': '(your api key for `http://`)'
//     });

//     let mapOptions: GoogleMapOptions = {
//       camera: {
//          target: {
//            lat: 43.0741904,
//            lng: -89.3809802
//          },
//          zoom: 18,
//          tilt: 30
//        }
//     };

//     this.map = GoogleMaps.create('map_canvas', mapOptions);

//     let marker: Marker = this.map.addMarkerSync({
//       title: 'Ionic',
//       icon: 'blue',
//       animation: 'DROP',
//       position: {
//         lat: 43.0741904,
//         lng: -89.3809802
//       }
//     });
//     marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
//       alert('clicked');
//     });
//   }
// }
