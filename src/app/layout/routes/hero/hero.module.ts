import {NgModule}       from '@angular/core';

import {HeroComponent} from "./hero.component";
import {HeroRoutingModule} from "./hero-routing.module";
import {HeroesModule} from "./heroes/heroes.module";
import {CrisisCenterModule} from "./crisis-center/crisis-center.module";
import {DialogService} from "./dialog.service";

@NgModule({
  imports: [
    HeroRoutingModule,
    HeroesModule,
    CrisisCenterModule,
  ],
  declarations: [
    HeroComponent,
  ],
  providers: [
    DialogService
  ]
})
export class HeroModule {
}
