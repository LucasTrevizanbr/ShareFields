import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-horario-quadra',
  templateUrl: './excluir-horario-quadra.component.html',
  styleUrls: ['./excluir-horario-quadra.component.css']
})
export class ExcluirHorarioQuadraComponent implements OnInit {

  jogadores=[{
    avatar:"https://www.futbox.com/img/v1/552/51a/e8a/d14/8bfc0ebe560ed9bd17e0.png",
    apelido:"LuekoManiaco",
    },
    {
      avatar:"https://www.futbox.com/img/v1/552/51a/e8a/d14/8bfc0ebe560ed9bd17e0.png",
      apelido:"LuekoManiaco",
    },
    {
      avatar:"https://www.futbox.com/img/v1/552/51a/e8a/d14/8bfc0ebe560ed9bd17e0.png",
      apelido:"LuekoManiaco",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
