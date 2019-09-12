import { Component, OnInit, Input } from '@angular/core';
import { Strip } from '../../models/strip.model';

@Component({
  selector: 'blg-strip',
  templateUrl: './strip.component.html',
  styleUrls: ['./strip.component.scss']
})
export class StripComponent implements OnInit {

  @Input()
  public strip: Strip;

  constructor() { }

  ngOnInit() {

  }

}
