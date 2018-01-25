import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import { ComponentsModule } from '../../components/components.module';
import { PinchZoomSvgDirective } from '../../shared/directives/pinch-zoom-svg.directive';

@NgModule({
    declarations: [
        AboutPage,
        PinchZoomSvgDirective
    ],
    imports: [
        IonicPageModule.forChild(AboutPage),
        ComponentsModule
    ],
    exports: [
        AboutPage
    ]
})
export class AboutPageModule {}