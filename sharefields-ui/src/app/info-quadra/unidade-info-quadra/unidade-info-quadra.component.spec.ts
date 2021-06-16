import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeInfoQuadraComponent } from './unidade-info-quadra.component';

describe('UnidadeInfoQuadraComponent', () => {
  let component: UnidadeInfoQuadraComponent;
  let fixture: ComponentFixture<UnidadeInfoQuadraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadeInfoQuadraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeInfoQuadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
