import {NgModule}     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {heroesRoutes} from "./heroes/heroes-routing.module";
import {HeroComponent} from "./hero.component";
import {crisisCenterRoutes} from "./crisis-center/crisis-center-routing.module";

export const heroRoutes: Routes = [
    {
        path: 'hero',
        component: HeroComponent,
        children: [
            ...heroesRoutes,
            ...crisisCenterRoutes
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(heroRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class HeroRoutingModule {
}
