import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactoPage }       from '../contacto/contacto';
import { EventosPage }        from '../eventos/eventos';

@Component( {
    selector:    'page-restaurante',
    templateUrl: 'restaurante.html'
} )
export class RestaurantePage {
    
    constructor( public navCtrl : NavController ) {
        
    }
    
    
    goTo_PreviousPage() {
        this.navCtrl.setRoot( ContactoPage );
    }
    
    
    goTo_NextPage() {
        this.navCtrl.setRoot( EventosPage );
    }
    
}
