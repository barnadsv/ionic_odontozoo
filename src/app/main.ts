import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import './polyfills';
import 'gsap';
import '../shared/directives/pinch-zoom-svg.directive';

platformBrowserDynamic().bootstrapModule(AppModule);
