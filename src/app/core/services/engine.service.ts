import { Injectable, OnInit } from '@angular/core';
import { Engine } from 'babylonjs';
import { Subject } from 'rxjs';

@Injectable()
export class EngineService implements OnInit {
  public engine$: Subject<Engine>;
  constructor() {}

  ngOnInit() {
    const canvas = document.createElement('canvas');
    const engine = new Engine(canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true,
    });
    this.engine$.next(engine);
  }
}
