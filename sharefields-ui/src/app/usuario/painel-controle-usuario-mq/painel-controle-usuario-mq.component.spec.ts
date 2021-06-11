import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelControleUsuarioMqComponent } from './painel-controle-usuario-mq.component';

describe('PainelControleUsuarioMqComponent', () => {
  let component: PainelControleUsuarioMqComponent;
  let fixture: ComponentFixture<PainelControleUsuarioMqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelControleUsuarioMqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelControleUsuarioMqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
