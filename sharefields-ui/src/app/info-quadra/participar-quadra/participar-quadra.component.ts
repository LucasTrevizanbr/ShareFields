import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoQuadra } from 'src/app/model/InfoQuadra';
import { InfoQuadraService } from 'src/app/service/info-quadra.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-participar-quadra',
  templateUrl: './participar-quadra.component.html',
  styleUrls: ['./participar-quadra.component.css']
})
export class ParticiparQuadraComponent implements OnInit {
  
  infoQuadra: InfoQuadra = new InfoQuadra();

  constructor(
    private route: ActivatedRoute,
    private infoQuadraService: InfoQuadraService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0);

    if(environment.token ==''){
      alert('Sua seção expirou, faça login novamente!')
      this.router.navigate(['/logar'])
    };

    let idRotaAtiva = this.route.snapshot.params['id'];
    this.acharInfoQuadraPorID(idRotaAtiva);
  }

  acharInfoQuadraPorID(id: number){
    this.infoQuadraService.procurarInfoQuadraPorId(id).subscribe((resp: InfoQuadra)=>{
      this.infoQuadra = resp
    })
  }

  participarDaQuadra(){
    this.infoQuadraService.inserirUsuarioNaInfoQuadra(this.infoQuadra.id, environment.id).subscribe((resp: InfoQuadra)=>{
      this.infoQuadra = resp;
      alert('Você esta participando dessa quadra!');
    })
  }

}
