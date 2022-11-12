import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup
  arrCategories: string[]
  regularExp: RegExp
  constructor(private postsService: PostService) {
    this.regularExp = new RegExp('^http(s)?\://[a-zA-Z0-9\-\.]+\.')

    this.arrCategories = this.postsService.getAllCategories()

    this.formulario = new FormGroup({
      title: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required, Validators.pattern(this.regularExp)]),
      date: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit(formu: any) {
    let newPost = formu.value
    newPost.id = this.postsService.getAll().length
    formu.reset()
    return this.postsService.createPost(newPost)
  }

  errorChecker(field: string, error: string): boolean | undefined {
    return this.formulario.get(field)?.hasError(error) && this.formulario.get(field)?.touched
  }
}
