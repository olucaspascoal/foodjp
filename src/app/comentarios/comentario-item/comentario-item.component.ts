import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentario-item',
  templateUrl: './comentario-item.component.html',
  styleUrls: ['./comentario-item.component.scss']
})
export class ComentarioItemComponent implements OnInit {

  constructor() { }
  @Input() data: any;

  ngOnInit(): void {
  }

}
