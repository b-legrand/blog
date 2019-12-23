import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid';

export interface Link {
  route: string;
  name: string;
  label?: string;
  children?: Link[];
  class?: string;
}

@Component({
  selector: 'blg-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public currentIndex = 1;
  public lastIndex = 42;

  public title = '3DBLG';

  public size = 92;

  constructor() {}

  ngOnInit() {
  }
}
