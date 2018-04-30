import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SalaPage }           from '../sala/sala';
import { AntiguedadesPage }   from '../antiguedades/antiguedades';

@Component( {
    selector:    'page-miradores',
    templateUrl: 'miradores.html'
} )
export class MiradoresPage {
    
    constructor( public navCtrl : NavController ) {
        
    }
    
    
    goTo_PreviousPage() {
        this.navCtrl.setRoot( SalaPage );
    }
    
    
    goTo_NextPage() {
        this.navCtrl.setRoot( AntiguedadesPage );
    }
}
