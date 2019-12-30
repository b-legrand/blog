/* tslint:disable */
export interface CodeFile {

  /**
   * The case id.
   */
  caseId?: string;

  /**
   * The code file id.
   */
  id?: string;
  type?: 'shader' | 'babylon' | 'svg';
}
