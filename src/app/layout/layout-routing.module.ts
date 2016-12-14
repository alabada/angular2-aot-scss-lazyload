import {NgModule}     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from "./layout.component";
import {HomeComponent} from "./routes/home/home.component";
import {heroRoutes} from "./routes/hero/hero-routing.module";
import {Error404Component} from "./routes/pages/error404/error404.component";
import {Error500Component} from "./routes/pages/error500/error500.component";
import {LockComponent} from "./routes/pages/lock/lock.component";
import {LoginComponent} from "./routes/pages/login/login.component";
import {MaintenanceComponent} from "./routes/pages/maintenance/maintenance.component";
import {RecoverComponent} from "./routes/pages/recover/recover.component";

// {path: 'hero', loadChildren: 'app/layout/routes/hero/hero.module#HeroModule'},
const layoutRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: 'home', component: HomeComponent},
            ...heroRoutes,
            {path: '404', component: Error404Component},
            {path: '500', component: Error500Component},
            {path: 'lock', component: LockComponent},
            {path: 'login', component: LoginComponent},
            {path: 'maintenance', component: MaintenanceComponent},
            {path: 'recover', component: RecoverComponent}
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
