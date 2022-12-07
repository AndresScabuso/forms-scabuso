import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTurnosComponent } from './pagina-turnos.component';

describe('PaginaTurnosComponent', () => {
  let component: PaginaTurnosComponent;
  let fixture: ComponentFixture<PaginaTurnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaTurnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
