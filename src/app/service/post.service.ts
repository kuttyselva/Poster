import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post.models';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable()
export class PostService {
 
  postsUrl:string='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }
  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl);
  }
  savePost(post:Post){
    return this.http.post<Post>(this.postsUrl,post,httpOptions);
  }
  updatePost(post:Post){
    const Url=`${this.postsUrl}/${post.id}`;
    return this.http.put<Post>(Url,post,httpOptions);
  }
  removePost(post:Post | number){
    const id=typeof post ==='number' ? post:post.id;
    const Url=`${this.postsUrl}/${id}`;
    return this.http.delete<Post>(Url,httpOptions);
  }
  getPost(id:number){
    const Url=`${this.postsUrl}/${id}`;
    return this.http.get<Post>(Url);
  }
  
}
