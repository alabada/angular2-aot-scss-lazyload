import {NgModule}     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroListComponent}    from './hero-list.component';
import {HeroDetailComponent}  from './hero-detail.component';

export const heroesRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroListComponent
    },
    {
        path: 'ahero/:id',
        component: HeroDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(heroesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HeroRoutingModule {
}
