import { NgModule } from '@angular/core';

import {APP_BASE_HREF} from '@angular/common';

import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { WelcomePage } from '../pages/welcome/welcome';
import { ContactoPage } from '../pages/contacto/contacto';
import { Nochevieja2016Page } from '../pages/nochevieja2016/nochevieja2016';
import { RestaurantePage } from '../pages/restaurante/restaurante';
import { EventosPage } from '../pages/eventos/eventos';
import { SalaPage } from '../pages/sala/sala';
import { MiradoresPage } from '../pages/miradores/miradores';
import { AntiguedadesPage } from '../pages/antiguedades/antiguedades';
import { MuseoPage } from '../pages/museo/museo';


@NgModule( {
    declarations:    [
        MyApp,
        WelcomePage,
        ContactoPage,
        Nochevieja2016Page,
        RestaurantePage,
        EventosPage,
        SalaPage,
        MiradoresPage,
        AntiguedadesPage,
        MuseoPage
    ],
    imports:         [
        IonicModule.forRoot( MyApp,
            { locationStrategy: 'path' /* 'hash' 'path' */ }, /* path option value requires {provide: APP_BASE_HREF, useValue : '/' } in providers  below */
            {
                links: [
                    { component: WelcomePage,          name: 'Welcome',              segment: 'welcome' /* '' */ },
                    { component: ContactoPage,         name: 'Contacto',             segment: 'contacto' },
                    { component: Nochevieja2016Page,   name: 'Nochevieja 2016-2017', segment: '' /* 'nochevieja2016' */ },
                    { component: RestaurantePage,      name: 'Restaurante',          segment: 'restaurante' },
                    { component: EventosPage,          name: 'Eventos',              segment: 'eventos' },
                    { component: SalaPage,             name: 'Sala',                 segment: 'sala' },
                    { component: MiradoresPage,        name: 'Miradores',            segment: 'miradores' },
                    { component: AntiguedadesPage,     name: 'Antiguedades',         segment: 'antiguedades' },
                    { component: MuseoPage,            name: 'Museo',                segment: 'museo' }
                ]
            }
        )
    ],
    bootstrap:       [ IonicApp ],
    entryComponents: [
        MyApp,
        WelcomePage,
        ContactoPage,
        Nochevieja2016Page,
        RestaurantePage,
        EventosPage,
        SalaPage,
        MiradoresPage,
        AntiguedadesPage,
        MuseoPage
    ],
    providers: [{provide: APP_BASE_HREF, useValue : '/' }]
} )
export class AppModule {
}
