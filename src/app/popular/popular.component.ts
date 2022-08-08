import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  constructor() { }
  public produtos = [{}];

  ngOnInit(): void {
    this.produtos = [
      {
        imagem: '/assets/pratos/1.png',
        titulo: 'Ramen de Frango',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        preco: 'R$ 30'
      },
      {
        imagem: '/assets/pratos/2.png',
        titulo: 'Ramen Apimentado',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        preco: 'R$ 30'
      },
      {
        imagem: '/assets/pratos/3.png',
        titulo: 'Ramen Tradicional',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        preco: 'R$ 30'
      }
    ]
  }

}
