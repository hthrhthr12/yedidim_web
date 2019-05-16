import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallStateProvider } from '../../providers/call-state/call-state';

/**
 * Generated class for the AppeallerDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appealler-details',
  templateUrl: 'appealler-details.html',
})
export class AppeallerDetailsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public callStateProvider: CallStateProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppeallerDetailsPage');
  }

}
