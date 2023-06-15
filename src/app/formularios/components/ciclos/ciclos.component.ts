import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.scss']
})
export class CiclosComponent implements OnInit , OnDestroy{
  //metodo constructor
  constructor(){
    console.log('constructor');
  }

//metodo oninit
ngOnInit(): void {
//cargado de base de datos
  console.log('OnInit');
}
ngOnDestroy(): void {
  //on destroy
  console.log('OnInit');

}

}