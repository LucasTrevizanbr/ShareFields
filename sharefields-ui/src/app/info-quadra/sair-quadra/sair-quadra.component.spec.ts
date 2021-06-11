import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SairQuadraComponent } from './sair-quadra.component';

describe('SairQuadraComponent', () => {
  let component: SairQuadraComponent;
  let fixture: ComponentFixture<SairQuadraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SairQuadraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SairQuadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
