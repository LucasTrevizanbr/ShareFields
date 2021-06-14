import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuadraService } from 'src/app/service/quadra.service';
import { Quadra } from 'src/app/model/Quadra';

@Component({
  selector: 'app-unidade-quadra',
  templateUrl: './unidade-quadra.component.html',
  styleUrls: ['./unidade-quadra.component.css']
})
export class UnidadeQuadraComponent implements OnInit {

  quadra: Quadra = new Quadra();

  constructor(
    private route: ActivatedRoute,
    private quadraService: QuadraService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0);

    if(environment.token ==''){
      alert('Sua seção expirou, faça login novamente!')
      this.router.navigate(['/logar'])
    };

    let idRotaAtiva = this.route.snapshot.params['id'];
    this.acharQuadraPorID(idRotaAtiva);
  }

  acharQuadraPorID(id: number){
    this.quadraService.buscarQuadraPorId(id).subscribe((resp: Quadra)=>{
      this.quadra = resp;
    })
  }

}
