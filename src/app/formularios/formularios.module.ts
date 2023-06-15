import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioComponent } from './components/formulario/formulario.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { Ciclos2Component } from './components/ciclos2/ciclos2.component';


@NgModule({
  declarations: [
    FormularioComponent,
    CiclosComponent,
    Ciclos2Component
  ],
  imports: [
    CommonModule
  ]
})
export class FormulariosModule { }
