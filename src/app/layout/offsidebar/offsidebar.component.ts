import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../core/settings/settings.service';

@Component({
    selector: 'app-offsidebar',
    templateUrl: './offsidebar.component.html',
    styleUrls: []
})
export class OffsidebarComponent implements OnInit {

    currentTheme: any ;
    selectedLanguage: string;

    constructor(public settings: SettingsService) {
    }

    ngOnInit() { }

    setTheme() {
        // this.themes.setTheme(this.currentTheme);
    }

    getLangs() {
    }

    setLang(value: any) {
    }
}
