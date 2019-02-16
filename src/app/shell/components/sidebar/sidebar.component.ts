import { Component, OnInit } from '@angular/core';

export interface Link {
  route: string;
  name: string;
}

@Component({
  selector: 'blg-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public links: Link[] = [
    {
      route: 'post/last',
      name: 'dernier post',
    },
    {
      route: 'category/strip',
      name: 'Strips',
    },
  ];

  public title = '3DBLG';

  public size = 92;

  constructor() {}

  ngOnInit() {
  }
}
