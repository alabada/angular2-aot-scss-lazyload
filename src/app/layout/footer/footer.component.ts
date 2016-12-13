import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../core/settings/settings.service';

@Component({
    selector: '[app-footer]',
    templateUrl: './footer.component.html',
    styleUrls: []
})
export class FooterComponent implements OnInit {

    constructor(public settings: SettingsService) { }

    ngOnInit() {

    }

}
