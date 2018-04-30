import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
/*
 import { StatusBar, Splashscreen,GoogleAnalytics } from 'ionic-native';
 */

import {WelcomePage} from '../pages/welcome/welcome';
import {ContactoPage} from '../pages/contacto/contacto';
import {Nochevieja2016Page} from '../pages/nochevieja2016/nochevieja2016';
import {RestaurantePage} from '../pages/restaurante/restaurante';
import {EventosPage} from '../pages/eventos/eventos';
import {SalaPage} from '../pages/sala/sala';
import {MiradoresPage} from '../pages/miradores/miradores';
import {AntiguedadesPage} from '../pages/antiguedades/antiguedades';
import {MuseoPage} from '../pages/museo/museo';


export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = Nochevieja2016Page;

    pages: Array<MenuItem>;

    topMenuItems: Array<MenuItem>;

    appMenuItems: Array<MenuItem>;

    helpMenuItems: Array<MenuItem>;

    constructor(public platform: Platform) {

        this.initializeApp();

        this.topMenuItems = [
            {title: 'Nochevieja 2016-2017', component: Nochevieja2016Page, icon: 'musical-notes'}
        ];

        this.appMenuItems = [
            {title: 'Restaurante', component: RestaurantePage, icon: 'restaurant'},
            {title: 'Eventos', component: EventosPage, icon: 'calendar'},
            {title: 'Sala', component: SalaPage, icon: 'musical-note'},
            {title: 'Miradores', component: MiradoresPage, icon: 'eye'},
            {title: 'Antiguedades', component: AntiguedadesPage, icon: 'trophy'},
            {title: 'Museo', component: MuseoPage, icon: 'medal'},

        ];

        this.helpMenuItems = [
            {title: 'Bienvenid@s', component: WelcomePage, icon: 'bookmark'},
            {title: 'Contacto', component: ContactoPage, icon: 'mail'}
        ];


        /*
         GoogleAnalytics.debugMode()
         GoogleAnalytics.startTrackerWithId("UA-88903737-1");

         GoogleAnalytics.enableUncaughtExceptionReporting(true)
         .then((_success) => {
         console.log(_success)
         }).catch((_error) => {
         console.log(_error)
         });
         */

        /*
         platform.ready().then(() => {
         window.analytics.startTrackerWithId("UA-88903737-1");
         });
         */

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleLightContent();
            Splashscreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
