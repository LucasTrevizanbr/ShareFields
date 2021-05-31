import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverViewUserComponent } from './over-view-user.component';

describe('OverViewUserComponent', () => {
  let component: OverViewUserComponent;
  let fixture: ComponentFixture<OverViewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverViewUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverViewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
