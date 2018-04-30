import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EventosPage }     from '../eventos/eventos';
import { MiradoresPage }   from '../miradores/miradores';

@Component( {
    selector:    'page-sala',
    templateUrl: 'sala.html'
} )
export class SalaPage {
    
    constructor( public navCtrl : NavController ) {
        
    }
    
    
    goTo_PreviousPage() {
        this.navCtrl.setRoot( EventosPage );
    }
    
    
    goTo_NextPage() {
        this.navCtrl.setRoot( MiradoresPage );
    }
}
