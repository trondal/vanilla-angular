import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { SwitchComponent } from './switch/switch.component';
import { QuestionsRoutingModule } from 'src/app/questions/questions-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SwitchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    QuestionsRoutingModule,
  ],
})
export class QuestionsModule {}
