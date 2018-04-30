import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MiradoresPage }   from '../miradores/miradores';
import { MuseoPage }       from '../museo/museo';

@Component( {
    selector:    'page-antiguedades',
    templateUrl: 'antiguedades.html'
} )
export class AntiguedadesPage {
    
    constructor( public navCtrl : NavController ) {
        
    }
    
    goTo_PreviousPage() {
        this.navCtrl.setRoot( MiradoresPage );
    }
    
    
    goTo_NextPage() {
        this.navCtrl.setRoot( MuseoPage );
    }
    
}
