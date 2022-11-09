import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup
  arrCategories: string[]
  constructor(private postsService: PostService) {
    this.arrCategories = this.postsService.getAllCategories()
    this.formulario = new FormGroup({
      title: new FormControl(),
      text: new FormControl(),
      author: new FormControl(),
      image: new FormControl(),
      date: new FormControl(),
      category: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

}
