import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesList } from './series-list/series-list';



@NgModule({
  declarations: [
    SeriesList
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SeriesList
  ]
})
export class SeriesModule { }
