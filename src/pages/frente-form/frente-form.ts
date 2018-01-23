import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-frente-form',
  templateUrl: 'frente-form.html',
})
export class FrenteFormPage {

  rootPage = "AboutPage";

  @ViewChild(Nav) nav: Nav;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrenteFormPage');
  }

  isActive(page: PageInterface) {
    
  }

}
