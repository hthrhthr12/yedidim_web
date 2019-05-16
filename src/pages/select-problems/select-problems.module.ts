import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectProblemsPage } from './select-problems';

@NgModule({
  declarations: [
    SelectProblemsPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectProblemsPage),
  ],
})
export class SelectProblemsPageModule {}
