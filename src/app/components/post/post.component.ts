import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  onePost: Post[]
  postId: number
  constructor(private postService: PostService, private activeRoute: ActivatedRoute) {
    this.onePost = []
    this.postId = 0
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: any) => {
      //Capturar el id de la url para luego pasarsela al método getById y obtener el post con ese id

      this.postId = params['postId']
    })
    this.onePost = this.postService.getById(+this.postId)
  }
}
