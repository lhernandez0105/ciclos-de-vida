import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaComponent } from './vista/vista.component';
import { RuteoRoutingModule } from '../formularios/formularios-routing.module';



@NgModule({
  declarations: [
    VistaComponent
  ],
  imports: [
    CommonModule,
    RuteoRoutingModule
  ]
})
export class RuteoModule { }
