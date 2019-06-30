import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import { Post } from 'src/app/models/Post.models';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
   
  @Input() currentPost: Post;
  @Input()isEdit:boolean;
  @Output() newPost = new EventEmitter<Post>();
  @Output() updatedPost = new EventEmitter<Post>();
  constructor(private postService:PostService) { }

  ngOnInit() {
  }
 addPost(title,body){
   if(!title || !body){
    alert('please add post');
   }
   else{
   this.postService.savePost({title,body} as Post).subscribe(post=>{
     this.newPost.emit(post);
   });

   }
 }
 updatePost(){
   this.postService.updatePost(this.currentPost).subscribe(post=>{
     
     this.updatedPost.emit(post);
     alert(`post ${post.title} updated`);
   });
 }
}
