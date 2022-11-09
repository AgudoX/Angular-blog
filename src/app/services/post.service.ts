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

    ]


    this.arrPosts = [
      {
        id: 0,
        title: 'Aphrodite',
        text: 'Esto es un texto de prueba, haré lo que pueda y más de lo que pueda si es que eso es posible y haré lo posible incluso lo imposible',
        author: 'Javier Agudo',
        image: '../assets/images/Aphrodite.webp',
        date: new Date('12/09/2022'),
        category: 'Greek'
      },
      {
        id: 0,
        title: 'Hades',
        text: 'Esto es un texto de prueba',
        author: 'Javier Agudo',
        image: '../assets/images/Hades.webp',
        date: new Date('12/09/2022'),
        category: 'Greek'
      },
      {
        id: 0,
        title: 'Hercules',
        text: 'Esto es un texto de prueba',
        author: 'Javier Agudo',
        image: '../assets/images/Hercules.webp',
        date: new Date('12/09/2022'),
        category: 'Greek'
      },
      {
        id: 0,
        title: 'Loki',
        text: 'Esto es un texto de prueba',
        author: 'Javier Agudo',
        image: '../assets/images/Loki.webp',
        date: new Date('12/09/2022'),
        category: 'Nordic'
      },
      {
        id: 0,
        title: 'Odin',
        text: 'Esto es un texto de prueba',
        author: 'Javier Agudo',
        image: '../assets/images/Odin.webp',
        date: new Date('12/09/2022'),
        category: 'Nordic'
      },
      {
        id: 0,
        title: 'Zeus',
        text: 'Esto es un texto de prueba',
        author: 'Javier Agudo',
        image: '../assets/images/zeus.webp',
        date: new Date('12/09/2022'),
        category: 'Greek'
      },
      {
        id: 0,
        title: 'Osiris',
        text: 'Esto es un texto de prueba',
        author: 'Javier Agudo',
        image: '../assets/images/Osiris.webp',
        date: new Date('12/09/2022'),
        category: 'Egyptian'
      },
      {
        id: 0,
        title: 'Anubis',
        text: 'Esto es un texto de prueba',
        author: 'Javier Agudo',
        image: '../assets/images/Anubis.webp',
        date: new Date('12/09/2022'),
        category: 'Egyptian'
      }
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
    return this.arrPosts.filter(post => post.category === categoria
    )
  }

  /* Se utiliza para que en el select de lista-posts.html se dibujen las categorias automáticamente con un for of */
  getAllCategories() {
    this.arrCategories = this.arrPosts.map(pPost => pPost.category)
    return this.arrCategories = [...new Set(this.arrCategories)]
  }
}
