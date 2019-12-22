/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Comments } from '../models/comments';

@Injectable({
  providedIn: 'root',
})
export class CommentsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation commentsGet
   */
  static readonly CommentsGetPath = '/comments';

  /**
   * Return comments on a post with postId={id}.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `commentsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  commentsGet$Response(params?: {

    /**
     * The postId which we want the comments
     */
    postId?: string;

  }): Observable<StrictHttpResponse<Comments>> {

    const rb = new RequestBuilder(this.rootUrl, CommentsService.CommentsGetPath, 'get');
    if (params) {

      rb.query('postId', params.postId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Comments>;
      })
    );
  }

  /**
   * Return comments on a post with postId={id}.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `commentsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  commentsGet(params?: {

    /**
     * The postId which we want the comments
     */
    postId?: string;

  }): Observable<Comments> {

    return this.commentsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Comments>) => r.body as Comments)
    );
  }

}
