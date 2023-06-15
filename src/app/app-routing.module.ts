import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'', loadChildren:() => import('./formularios/formularios.module').then(m =>m.FormulariosModule)
},
{
  path:'ruteo',
  loadChildren:() => import('./ruteo/ruteo.module').then(m => m.RuteoModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
