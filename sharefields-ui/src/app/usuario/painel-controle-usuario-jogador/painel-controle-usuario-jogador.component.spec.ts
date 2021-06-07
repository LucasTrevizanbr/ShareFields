import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelControleUsuarioJogadorComponent } from './painel-controle-usuario-jogador.component';

describe('PainelControleUsuarioJogadorComponent', () => {
  let component: PainelControleUsuarioJogadorComponent;
  let fixture: ComponentFixture<PainelControleUsuarioJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelControleUsuarioJogadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelControleUsuarioJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
