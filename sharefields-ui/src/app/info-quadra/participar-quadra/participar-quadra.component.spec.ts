import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticiparQuadraComponent } from './participar-quadra.component';

describe('ParticiparQuadraComponent', () => {
  let component: ParticiparQuadraComponent;
  let fixture: ComponentFixture<ParticiparQuadraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticiparQuadraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticiparQuadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
