import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrenteFormPage } from './frente-form';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FrenteFormPage,
  ],
  imports: [
    IonicPageModule.forChild(FrenteFormPage),
    ComponentsModule
  ],
  exports: [
    FrenteFormPage
  ]
})
export class FrenteFormPageModule {}
