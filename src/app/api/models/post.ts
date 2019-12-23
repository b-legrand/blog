/* tslint:disable */
import { Case } from './case';
export interface Post {

  /**
   * The body content of the post
   */
  body: string;

  /**
   * The post id.
   */
  id: string;
  strip?: Array<Case>;

  /**
   * The title of the post
   */
  title: string;

  /**
   * The post userId.
   */
  userId: string;
}
