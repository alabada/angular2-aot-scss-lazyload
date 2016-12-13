import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {AppRoutingModule} from "./app-routing.module";
import {LayoutModule} from './layout/layout.module';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
