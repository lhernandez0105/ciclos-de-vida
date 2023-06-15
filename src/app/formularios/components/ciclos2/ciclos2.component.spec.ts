import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ciclos2Component } from './ciclos2.component';

describe('Ciclos2Component', () => {
  let component: Ciclos2Component;
  let fixture: ComponentFixture<Ciclos2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ciclos2Component]
    });
    fixture = TestBed.createComponent(Ciclos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
