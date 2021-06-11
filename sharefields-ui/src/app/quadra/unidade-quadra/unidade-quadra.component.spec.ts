import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeQuadraComponent } from './unidade-quadra.component';

describe('UnidadeQuadraComponent', () => {
  let component: UnidadeQuadraComponent;
  let fixture: ComponentFixture<UnidadeQuadraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadeQuadraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeQuadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
