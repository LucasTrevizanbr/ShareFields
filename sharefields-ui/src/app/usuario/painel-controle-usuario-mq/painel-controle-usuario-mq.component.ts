import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-controle-usuario-mq',
  templateUrl: './painel-controle-usuario-mq.component.html',
  styleUrls: ['./painel-controle-usuario-mq.component.css']
})
export class PainelControleUsuarioMqComponent implements OnInit {

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
