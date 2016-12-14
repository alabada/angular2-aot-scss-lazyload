import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../../core/settings/settings.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: []
})
export class Error404Component implements OnInit {

  constructor(public settings: SettingsService) { }

  ngOnInit() {
  }

}