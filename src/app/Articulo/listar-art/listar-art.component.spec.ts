import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarArtComponent } from './listar-art.component';

describe('ListarArtComponent', () => {
  let component: ListarArtComponent;
  let fixture: ComponentFixture<ListarArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarArtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
