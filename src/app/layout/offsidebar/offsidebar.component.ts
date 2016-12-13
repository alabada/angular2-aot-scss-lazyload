import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-offsidebar',
    templateUrl: './offsidebar.component.html',
    styleUrls: []
})
export class OffsidebarComponent implements OnInit {

    currentTheme: any ;
    selectedLanguage: string;

    constructor() {

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
