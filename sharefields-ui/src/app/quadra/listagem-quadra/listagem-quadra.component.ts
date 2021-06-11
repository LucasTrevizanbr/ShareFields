import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-quadra',
  templateUrl: './listagem-quadra.component.html',
  styleUrls: ['./listagem-quadra.component.css']
})
export class ListagemQuadraComponent implements OnInit {

quadras=[
  { 
    urlImg:"https://ginasiomedianeira.com.br/wp-content/uploads/2018/05/20180524_143450_HDR.jpg",
    nome:"Quadra Legal",
    descricao:"Maneira de futsal",
    modalidade:"futsal"
  },
  { 
    urlImg:"https://ginasiomedianeira.com.br/wp-content/uploads/2018/05/20180524_143450_HDR.jpg",
    nome:"Quadra Legal",
    descricao:"Maneira de futsal",
    modalidade:"futsal"
  },
  { 
    urlImg:"https://ginasiomedianeira.com.br/wp-content/uploads/2018/05/20180524_143450_HDR.jpg",
    nome:"Quadra Legal",
    descricao:"Maneira de futsal",
    modalidade:"futsal"
  },
  { 
    urlImg:"https://ginasiomedianeira.com.br/wp-content/uploads/2018/05/20180524_143450_HDR.jpg",
    nome:"Quadra Legal",
    descricao:"Maneira de futsal",
    modalidade:"futsal"
  },
  { 
    urlImg:"https://ginasiomedianeira.com.br/wp-content/uploads/2018/05/20180524_143450_HDR.jpg",
    nome:"Quadra Legal",
    descricao:"Maneira de futsal",
    modalidade:"futsal"
  },
  { 
    urlImg:"https://ginasiomedianeira.com.br/wp-content/uploads/2018/05/20180524_143450_HDR.jpg",
    nome:"Quadra Legal",
    descricao:"Maneira de futsal",
    modalidade:"futsal"
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
