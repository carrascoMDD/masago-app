import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AntiguedadesPage }   from '../antiguedades/antiguedades';


@Component( {
    selector:    'page-museo',
    templateUrl: 'museo.html'
} )
export class MuseoPage {
    
    constructor( public navCtrl : NavController ) {
        
    }
    
    
    goTo_PreviousPage() {
        this.navCtrl.setRoot( AntiguedadesPage );
    }
    
    
    goTo_NextPage() {
        this.navCtrl.setRoot( MuseoPage );
    }
}
