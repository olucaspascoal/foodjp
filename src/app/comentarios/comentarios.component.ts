import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  constructor() { }
  public comentarios=[{}]

  ngOnInit(): void {
    this.comentarios = [
      {
        foto: '/assets/perfil/1.png',
        nome: 'Daniele Almeida',
        descricao: 'Ótimo serviço! Encantada com a qualidade dos pratos.',
        estrelas: 4
      },
      {
        foto: '/assets/perfil/2.png',
        nome: 'Ricardo França',
        descricao: 'Não é apenas a comida excelente, o serviço torna a experiência especial.',
        estrelas: 4
      }
    ]
  }

}
