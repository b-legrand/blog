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
   * Path part for operation getPosts
   */
  static readonly GetPostsPath = '/posts';

  /**
   * Return all the posts that are in our blog.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPosts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosts$Response(params?: {

  }): Observable<StrictHttpResponse<Posts>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.GetPostsPath, 'get');
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
   * To access the full response (for headers, for example), `getPosts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosts(params?: {

  }): Observable<Posts> {

    return this.getPosts$Response(params).pipe(
      map((r: StrictHttpResponse<Posts>) => r.body as Posts)
    );
  }

  /**
   * Path part for operation createPost
   */
  static readonly CreatePostPath = '/posts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPost$Response(params: {

    body: Post
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.CreatePostPath, 'post');
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
   * To access the full response (for headers, for example), `createPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPost(params: {

    body: Post
  }): Observable<void> {

    return this.createPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getPost
   */
  static readonly GetPostPath = '/posts/{id}';

  /**
   * Return a post with postId equals to id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPost$Response(params: {

    /**
     * The postId requested by user.
     */
    id: string;

  }): Observable<StrictHttpResponse<Post>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.GetPostPath, 'get');
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
   * To access the full response (for headers, for example), `getPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPost(params: {

    /**
     * The postId requested by user.
     */
    id: string;

  }): Observable<Post> {

    return this.getPost$Response(params).pipe(
      map((r: StrictHttpResponse<Post>) => r.body as Post)
    );
  }

  /**
   * Path part for operation updatePost
   */
  static readonly UpdatePostPath = '/posts/{id}';

  /**
   * A  complete replacement of a post with id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePost$Response(params: {

    /**
     * The postId requested by user.
     */
    id: string;

    body: Post
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.UpdatePostPath, 'put');
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
   * To access the full response (for headers, for example), `updatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePost(params: {

    /**
     * The postId requested by user.
     */
    id: string;

    body: Post
  }): Observable<void> {

    return this.updatePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deletePost
   */
  static readonly DeletePostPath = '/posts/{id}';

  /**
   * Deletes the post with id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePost()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePost$Response(params: {

    /**
     * The postId requested by user.
     */
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.DeletePostPath, 'delete');
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
   * To access the full response (for headers, for example), `deletePost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePost(params: {

    /**
     * The postId requested by user.
     */
    id: string;

  }): Observable<void> {

    return this.deletePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation patchPost
   */
  static readonly PatchPostPath = '/posts/{id}';

  /**
   * Update the post with id partially.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchPost$Response(params: {

    /**
     * The postId requested by user.
     */
    id: string;

    body: PatchPost
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.PatchPostPath, 'patch');
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
   * To access the full response (for headers, for example), `patchPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchPost(params: {

    /**
     * The postId requested by user.
     */
    id: string;

    body: PatchPost
  }): Observable<void> {

    return this.patchPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
