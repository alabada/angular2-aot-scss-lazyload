import {NgModule}     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from "./layout.component";
import {HomeComponent} from "./routes/home/home.component";

const layoutRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: 'home', component: HomeComponent},
            {path: 'hero', loadChildren: 'app/layout/routes/hero/hero.module#HeroModule'},
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
