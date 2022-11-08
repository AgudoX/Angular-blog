import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {
  arrPosts: Post[]
  constructor(private postsService: PostService) {
    this.arrPosts = []
  }

  ngOnInit(): void {
    this.arrPosts = this.postsService.getAll()
    console.log(this.arrPosts)
  }

}
