import { Case } from './case.model';
import { Scene } from 'babylonjs';

export interface Strip {
    cases: { [key: string]: Case };
    scene?: Scene;
}
