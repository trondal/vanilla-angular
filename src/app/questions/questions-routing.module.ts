import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitchComponent } from 'src/app/questions/switch/switch.component';

const routes: Routes = [
  {
    path: '',
    component: SwitchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsRoutingModule {}
