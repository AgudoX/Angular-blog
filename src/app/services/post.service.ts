import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  arrPosts: Post[]
  arrCategories: string[]
  constructor() {
    this.arrCategories = [
      "personas",
      "zombies",
      "anime",
      "lol"
    ]


    this.arrPosts = [
      {
        id: 0,
        title: 'Titulo de prueba',
        text: 'Esto es un texto de prueba, haré lo que pueda y más de lo que pueda si es que eso es posible y haré lo posible incluso lo imposible',
        author: 'Javier Agudo',
        image: '../assets/images/imagen1.webp',
        date: new Date('12/09/2022'),
        category: 'lol'
      },
      {
        id: 0,
        title: 'Titulo de prueba',
        text: 'Esto es un texto de prueba',
        author: 'Javier Agudo',
        image: '../assets/images/imagen1.webp',
        date: new Date('12/09/2022'),
        category: 'lol'
      },
      {
        id: 0,
        title: 'Titulo de prueba',
        text: 'Esto es un texto de prueba',
        author: 'Javier Agudo',
        image: '../assets/images/imagen1.webp',
        date: new Date('12/09/2022'),
        category: 'personas'
      },
      {
        id: 0,
        title: 'Titulo de prueba',
        text: 'Esto es un texto de prueba',
        author: 'Javier Agudo',
        image: '../assets/images/imagen1.webp',
        date: new Date('12/09/2022'),
        category: 'anime'
      },
      {
        id: 0,
        title: 'Titulo de prueba',
        text: 'Esto es un texto de prueba',
        author: 'Javier Agudo',
        image: '../assets/images/imagen1.webp',
        date: new Date('12/09/2022'),
        category: 'zombies'
      },
    ]
  }

  /* Retorna la array con todos los posts */
  getAll() {
    return this.arrPosts
  }

  /* Se le pasa el resultado del formulario por parámetro en el formulario.ts para crear un nuevo post y que aparezca, implica meter un evento click en el formulario y dentro de la función que acompaña al evento click meter el servicio pasando el $event.loquesea */
  createPost(pPost: Post) {
    return this.arrPosts.push(pPost)
  }

  /* Se utiliza para filtrar los posts por categorias */
  getByCategories(categoria: string) {
    return this.arrPosts.filter((post) => {
      post.category === categoria
    })
  }

  /* Se utiliza en el formulario para que en el select se dibujen las categorias automáticamente con un for of */
  getAllCategories() {
    return this.arrCategories
  }
}
