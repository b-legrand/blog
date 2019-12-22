import { Component, OnInit } from '@angular/core';
import { v4 } from "uuid";

export interface Link {
  route: string;
  name: string;
  label?: string;
}

@Component({
  selector: 'blg-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public links: Link[] = [
    {
      route: 'post/first',
      label: '<<',
      name: 'first post',
    },
    {
      route: 'post/' + v4(),
      label: '<',
      name: 'previous post',
    },
    {
      route: 'category/strip',
      name: 'Strips',
    },
    {
      route: 'post/last',
      label: '>>',
      name: 'last post',
    },
  ];

  public title = '3DBLG';

  public size = 92;

  constructor() {}

  ngOnInit() {
  }
}
