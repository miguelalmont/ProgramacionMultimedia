import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallInfoPage } from './call-info.page';

const routes: Routes = [
  {
    path: '',
    component: CallInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallInfoPageRoutingModule {}
