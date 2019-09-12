import { Scene, Camera } from 'babylonjs';

export interface Case {
  content: any;
  bubbles: [];
  path: string;
}
export interface Bubble {
  text: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  width: number;
  font: {
      size: string;
      family: string;
      color: string;
  };
}
export interface ThreeDeeCase extends Case {
  camera: any;
  scene: Scene;
  shaders?: any;
}

export interface SVGCase extends Case {
  shapes: string[];
}
