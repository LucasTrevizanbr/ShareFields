import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-over-view-user',
  templateUrl: './over-view-user.component.html',
  styleUrls: ['./over-view-user.component.css']
})
export class OverViewUserComponent implements OnInit {

  img:string = "https://conteudo.imguol.com.br/c/esporte/f0/2021/05/10/cristiano-ronaldo-lamenta-lance-durante-derrota-da-juventus-por-3-a-0-para-o-milan-1620659805782_v2_450x337.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
