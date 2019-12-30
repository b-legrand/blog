/* tslint:disable */
import { Bubble } from './bubble';
import { CodeFile } from './code-file';
import { Point } from './point';
export interface Case {

  /**
   * animated or not
   */
  caseType?: 'svg' | '3d' | 'canvas';
  code?: Array<CodeFile>;
  id: string;

  /**
   * position of case edge points.
   */
  mask: Array<Point>;
  postId?: string;
  texts?: Array<Bubble>;
}
