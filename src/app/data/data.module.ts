import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelService } from './services/marvel.service';

@NgModule({
  declarations: [MarvelService],
  imports: [
    CommonModule
  ],
  exports: [MarvelService]
})
export class DataModule { }
