import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Nochevieja2016Page } from '../nochevieja2016/nochevieja2016';
import { ContactoPage }       from '../contacto/contacto';

@Component( {
    selector:    'page-welcome',
    templateUrl: 'welcome.html'
} )
export class WelcomePage {
    
    constructor( public navCtrl : NavController ) {
        
    }
    
    goTo_PreviousPage() {
        this.navCtrl.setRoot( Nochevieja2016Page );
    }
    
    goTo_NextPage() {
        this.navCtrl.setRoot( ContactoPage );
    }
    
    
}
