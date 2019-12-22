/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { PatchPost } from '../models/patch-post';
import { Post } from '../models/post';
import { Posts } from '../models/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation postsGet
   */
  static readonly PostsGetPath = '/posts';

  /**
   * Return all the posts that are in our blog.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  postsGet$Response(params?: {

  }): Observable<StrictHttpResponse<Posts>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.PostsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Posts>;
      })
    );
  }

  /**
   * Return all the posts that are in our blog.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postsGet(params?: {

  }): Observable<Posts> {

    return this.postsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Posts>) => r.body as Posts)
    );
  }

  /**
   * Path part for operation postsPost
   */
  static readonly PostsPostPath = '/posts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postsPost$Response(params: {

    body: Post
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.PostsPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postsPost(params: {

    body: Post
  }): Observable<void> {

    return this.postsPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postsIdGet
   */
  static readonly PostsIdGetPath = '/posts/{id}';

  /**
   * Return a post with postId equals to id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  postsIdGet$Response(params: {

    /**
     * The postId requested by user.
     */
    id: string;

  }): Observable<StrictHttpResponse<Post>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.PostsIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Post>;
      })
    );
  }

  /**
   * Return a post with postId equals to id.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postsIdGet(params: {

    /**
     * The postId requested by user.
     */
    id: string;

  }): Observable<Post> {

    return this.postsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Post>) => r.body as Post)
    );
  }

  /**
   * Path part for operation postsIdPut
   */
  static readonly PostsIdPutPath = '/posts/{id}';

  /**
   * A  complete replacement of a post with id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postsIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postsIdPut$Response(params: {

    /**
     * The postId requested by user.
     */
    id: string;

    body: Post
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.PostsIdPutPath, 'put');
    if (params) {

      rb.path('id', params.id);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * A  complete replacement of a post with id.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postsIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postsIdPut(params: {

    /**
     * The postId requested by user.
     */
    id: string;

    body: Post
  }): Observable<void> {

    return this.postsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postsIdDelete
   */
  static readonly PostsIdDeletePath = '/posts/{id}';

  /**
   * Deletes the post with id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  postsIdDelete$Response(params: {

    /**
     * The postId requested by user.
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.PostsIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Deletes the post with id.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postsIdDelete(params: {

    /**
     * The postId requested by user.
     */
    id: string;

  }): Observable<void> {

    return this.postsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postsIdPatch
   */
  static readonly PostsIdPatchPath = '/posts/{id}';

  /**
   * Update the post with id partially.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postsIdPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postsIdPatch$Response(params: {

    /**
     * The postId requested by user.
     */
    id: string;

    body: PatchPost
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.PostsIdPatchPath, 'patch');
    if (params) {

      rb.path('id', params.id);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Update the post with id partially.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postsIdPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postsIdPatch(params: {

    /**
     * The postId requested by user.
     */
    id: string;

    body: PatchPost
  }): Observable<void> {

    return this.postsIdPatch$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
