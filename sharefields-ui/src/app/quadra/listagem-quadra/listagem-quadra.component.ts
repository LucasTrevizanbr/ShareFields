import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0);

    if(environment.token ==''){
      alert('Sua seção expirou, faça login novamente!')
      this.router.navigate(['/logar'])
    };
  }

}
