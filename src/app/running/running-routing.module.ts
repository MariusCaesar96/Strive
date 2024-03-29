import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RunningPage } from './running.page';

const routes: Routes = [
  {
    path: '',
    component: RunningPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunningPageRoutingModule {}
