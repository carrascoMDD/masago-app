import { Component } from '@angular/core';
import 'leaflet';
import { NavController } from 'ionic-angular';

import { WelcomePage }       from '../welcome/welcome';
import { RestaurantePage }   from '../restaurante/restaurante';


const MAPMARKERS = [
    { "lat": 39.193265, "lon": -1.429922 }
];


@Component( {
    selector:    'page-contacto',
    templateUrl: 'contacto.html'
} )
export class ContactoPage {
    
    map;
    markersGroup;
    
    
    constructor( public navCtrl : NavController) {
        this.showMap();
    }
    
    
    
    goTo_PreviousPage() {
        this.navCtrl.setRoot( WelcomePage );
    }
    
    
    goTo_NextPage() {
        this.navCtrl.setRoot( RestaurantePage );
    }
    
    showMap() {
        setTimeout( () => {
            this.map = L.map( "map" ).setView( [ MAPMARKERS[ 0 ].lat, MAPMARKERS[ 0 ].lon ], 17 );
            L.tileLayer( 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            } ).addTo( this.map );
            this.showMarkers();
        } )
    }
    
    showMarkers() {
        if ( this.markersGroup ) {
            this.map.removeLayer( this.markersGroup );
        }
        this.markersGroup = L.layerGroup( [] );
        MAPMARKERS.forEach( mapMarker => {
            let marker : any = L.marker( [ mapMarker.lat, mapMarker.lon ] );
            marker.data      = mapMarker;
            this.markersGroup.addLayer( marker );
        } );
        this.map.addLayer( this.markersGroup );
    }
}
