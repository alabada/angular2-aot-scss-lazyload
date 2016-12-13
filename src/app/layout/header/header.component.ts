import { Component, OnInit, ViewChild } from '@angular/core';
import { UserblockService } from '../sidebar/userblock/userblock.service';
import { SettingsService } from '../../core/settings/settings.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: []
})
export class HeaderComponent implements OnInit {
    isNavSearchVisible: boolean;
    @ViewChild('fsbutton') fsbutton: any;  // the fullscreen button

    constructor(private userblockService: UserblockService, public settings: SettingsService) { }

    ngOnInit() {
        this.isNavSearchVisible = false;
    }

    toggleUserBlock(event: any) {
        event.preventDefault();
        this.userblockService.toggleVisibility();
    }

    openNavSearch(event: any) {
        event.preventDefault();
        event.stopPropagation();
        this.setNavSearchVisible(true);
    }

    setNavSearchVisible(stat: boolean) {
        // console.log(stat);
        this.isNavSearchVisible = stat;
    }

    getNavSearchVisible() {
        return this.isNavSearchVisible;
    }

    toggleOffsidebar() {
        this.settings.layout.offsidebarOpen = !this.settings.layout.offsidebarOpen;
    }

    toggleCollapsedSideabar() {
        this.settings.layout.isCollapsed = !this.settings.layout.isCollapsed;
    }

    isCollapsedText() {
        return this.settings.layout.isCollapsedText;
    }

    toggleFullScreen(event: any) {

    }
}
