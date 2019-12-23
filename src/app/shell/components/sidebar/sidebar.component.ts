import { Component, OnInit } from '@angular/core';
import { v4 } from "uuid";

export interface Link {
  route: string;
  name: string;
  label?: string;
  children?: Link[];
}

@Component({
  selector: 'blg-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public links: Link[] = [
    {
      route: 'posts/first',
      label: '«',
      name: 'first post',
    },
    {
      route: 'posts/' + v4(),
      label: '‹',
      name: 'previous post',
    },
    {
      route: 'category/strip',
      name: 'Strips',
      label: '1/1',
      children: []
    },
    {
      route: 'posts/next',
      label: '›',
      name: 'next post',
    },
    {
      route: 'posts/last',
      label: '»',
      name: 'last post',
    },
  ];

  public title = '3DBLG';

  public size = 92;

  constructor() {}

  ngOnInit() {
  }
}
