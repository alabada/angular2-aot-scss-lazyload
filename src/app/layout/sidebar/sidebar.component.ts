import { Component, OnInit, Injector } from '@angular/core';
import { MenuService } from '../../core/menu/menu.service';
import { SettingsService } from '../../core/settings/settings.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: []
})
export class SidebarComponent implements OnInit {

    menuItems: Array<any>;
    router: Router;

    constructor(private menu: MenuService, public settings: SettingsService, private injector: Injector) {

        this.menuItems = menu.getMenu();

    }

    ngOnInit() {

        this.router = this.injector.get(Router);

        this.router.events.subscribe((val) => {
            // close any submenu opened when route changes
            this.removeFloatingNav();
            // scroll view to top
            window.scrollTo(0, 0);
        });

    }

    // 鼠标单击子菜单
    toggleSubmenuClick(event: any) {

    }

    // Close menu collapsing height
    closeMenu(elem: any) {
        elem.height(elem[0].scrollHeight); // set height
        elem.height(0); // and move to zero to collapse
        elem.removeClass('opening');
    }

    // 鼠标悬浮 在菜单栏折叠时起效
    toggleSubmenuHover(event: any) {
    }

    listenForExternalClicks() {
    }

    removeFloatingNav() {
    }

    isSidebarCollapsed() {
        return this.settings.layout.isCollapsed;
    }
    isSidebarCollapsedText() {
        return this.settings.layout.isCollapsedText;
    }
    isEnabledHover() {
        return this.settings.layout.asideHover;
    }
}
