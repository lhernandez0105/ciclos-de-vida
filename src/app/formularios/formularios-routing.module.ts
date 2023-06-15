import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaComponent } from '../ruteo/vista/vista.component';


const routes: Routes = [
  {
    path:'',
    component:VistaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RuteoRoutingModule { }
