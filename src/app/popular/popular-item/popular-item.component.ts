import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-item',
  templateUrl: './popular-item.component.html',
  styleUrls: ['./popular-item.component.scss']
})
export class PopularItemComponent implements OnInit {

  constructor() { }
  @Input() data: any;

  ngOnInit(): void {
  }

}
