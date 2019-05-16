import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  @ViewChild(Nav) nav: Nav;

  public callId: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    
  }

  public openNewCall = () => {
   
    console.log("open new call");
    this.navCtrl.setRoot("MapPage");
  };

  public checkExistsCall = (callId: string) => {
     console.log("check for exists call" + callId) ;
  };
}
