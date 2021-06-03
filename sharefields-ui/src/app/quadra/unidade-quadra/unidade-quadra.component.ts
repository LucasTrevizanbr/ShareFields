import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unidade-quadra',
  templateUrl: './unidade-quadra.component.html',
  styleUrls: ['./unidade-quadra.component.css']
})
export class UnidadeQuadraComponent implements OnInit {

  quadra ={
    img:"https://ginasiomedianeira.com.br/wp-content/uploads/2018/05/20180524_143450_HDR.jpg",
    nome:"Quadra Legal",
    descricao:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ut placeat cumque sed repellat asperiores sequi dolor ullam sapiente officiis, quia cupiditate quidem, harum architecto officia, facilis culpa soluta.",
    rua:"Avenida Gaivotas",
    numero:"48",
    cidade:"São Paulo",
    bairro:"Cantinho do céu",
    infoQuadra:[{
      data: "23/08/2021",
      hrInicio:"13:20",
      hrFim:"15:30"
    },
    {
      data: "22/09/2022",
      hrInicio:"12:00",
      hrFim:"16:00"
    }]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
