import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
import { environment } from './environments/environment';
import {enableProdMode} from "@angular/core";

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
