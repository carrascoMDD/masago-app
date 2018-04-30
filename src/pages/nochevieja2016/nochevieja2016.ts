import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';


@Component( {
    selector:    'page-nochevieja2016',
    templateUrl: 'nochevieja2016.html'
} )
export class Nochevieja2016Page {
    
    constructor( public navCtrl : NavController ) {
        
    }
    
    goTo_NextPage() {
        this.navCtrl.setRoot( WelcomePage );
    }
}
