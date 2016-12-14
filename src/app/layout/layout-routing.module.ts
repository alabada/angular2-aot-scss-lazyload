import {NgModule}     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from "./layout.component";
import {HomeComponent} from "./routes/home/home.component";
import {heroRoutes} from "./routes/hero/hero-routing.module";

// {path: 'hero', loadChildren: 'app/layout/routes/hero/hero.module#HeroModule'},
const layoutRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: 'home', component: HomeComponent},
            ...heroRoutes
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(layoutRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LayoutRoutingModule {
}
