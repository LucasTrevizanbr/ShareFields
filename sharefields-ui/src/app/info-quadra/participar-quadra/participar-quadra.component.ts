import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participar-quadra',
  templateUrl: './participar-quadra.component.html',
  styleUrls: ['./participar-quadra.component.css']
})
export class ParticiparQuadraComponent implements OnInit {

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

  quadra={
    img:"https://ginasiomedianeira.com.br/wp-content/uploads/2018/05/20180524_143450_HDR.jpg",
    nome:"Quadra Legal",
    modalidade:"Futsal"
  }

  constructor() { }

  ngOnInit(): void {
  }

}