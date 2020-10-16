import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  exports: [
    MatSliderModule,
    MatButtonToggleModule,
    MatCardModule,
    MatRadioModule,
  ],
})
export class MaterialModule {}
