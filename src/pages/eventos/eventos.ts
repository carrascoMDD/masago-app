import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestaurantePage }   from '../restaurante/restaurante';
import { SalaPage }          from '../sala/sala';

@Component( {
    selector:    'page-eventos',
    templateUrl: 'eventos.html'
} )
export class EventosPage {
    
    constructor( public navCtrl : NavController ) {
        
    }
    
    goTo_PreviousPage() {
        this.navCtrl.setRoot( RestaurantePage );
    }
    
    
    goTo_NextPage() {
        this.navCtrl.setRoot( SalaPage );
    }
    
}
