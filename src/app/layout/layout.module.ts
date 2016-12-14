import {NgModule} from '@angular/core';

import {LayoutComponent} from './layout.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {NavsearchComponent} from './header/navsearch/navsearch.component';
import {OffsidebarComponent} from './offsidebar/offsidebar.component';
import {UserblockComponent} from './sidebar/userblock/userblock.component';
import {UserblockService} from './sidebar/userblock/userblock.service';
import {FooterComponent} from './footer/footer.component';

import {LayoutRoutingModule} from "./layout-routing.module";
import {MenuService} from "../core/menu/menu.service";
import appMenu from "./menu";
import {HomeComponent} from "./routes/home/home.component";
import {SettingsService} from "../core/settings/settings.service";
import {SharedModule} from "../shared/shared.module";
import {HeroModule} from "./routes/hero/hero.module";
import {Error500Component} from "./routes/pages/error500/error500.component";
import {Error404Component} from "./routes/pages/error404/error404.component";
import {LockComponent} from "./routes/pages/lock/lock.component";
import {LoginComponent} from "./routes/pages/login/login.component";
import {MaintenanceComponent} from "./routes/pages/maintenance/maintenance.component";
import {RecoverComponent} from "./routes/pages/recover/recover.component";

@NgModule({
    imports: [
        SharedModule,
        LayoutRoutingModule,

        HeroModule
    ],
    declarations: [
        LayoutComponent,
        SidebarComponent,
        UserblockComponent,
        HeaderComponent,
        NavsearchComponent,
        OffsidebarComponent,
        FooterComponent,

        // routes
        HomeComponent,
        Error404Component,
        Error500Component,
        LockComponent,
        LoginComponent,
        MaintenanceComponent,
        RecoverComponent
    ],
    providers: [
        UserblockService,
        MenuService,
        SettingsService,
    ],
    exports: [
    ]
})
export class LayoutModule {
    constructor(private menu: MenuService) {
        menu.addMenu(appMenu);
    }
}
