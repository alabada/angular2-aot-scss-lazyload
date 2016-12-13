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

@NgModule({
    imports: [
        LayoutRoutingModule,
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
