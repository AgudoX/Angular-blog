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
  arrCategories: string[]
  constructor(private postsService: PostService) {
    this.arrPosts = []
    this.arrCategories = []
  }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('blog')!)) {
      this.arrPosts = JSON.parse(localStorage.getItem('blog')!)
    } else {
      this.arrPosts = this.postsService.getAll()
    }
    this.arrCategories = this.postsService.getAllCategories()
  }

  onChange($event: any) {
    if ($event.target.value === 'all') {
      return this.arrPosts = this.postsService.getAll()
    } else {
      return this.arrPosts = this.postsService.getByCategories($event.target.value)
    }
  }
  onClick(pId: number) {
    return this.arrPosts = this.postsService.removePost(pId)
  }

}
