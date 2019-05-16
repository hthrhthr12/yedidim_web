import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppeallerDetailsPage } from './appealler-details';

@NgModule({
  declarations: [
    AppeallerDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AppeallerDetailsPage),
  ],
  exports: [
    AppeallerDetailsPage
  ]
})
export class AppeallerDetailsPageModule {}
