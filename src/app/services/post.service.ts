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
        text: 'Aphrodite is an ancient Greek goddess associated with love, lust, beauty, pleasure, passion, and procreation. She was syncretized with the Roman goddess Venus. Some of the major symbols related with Aphrodite include myrtles, roses, doves, sparrows, and swans.',
        author: 'Mario',
        image: '../assets/images/Aphrodite.webp',
        date: new Date('12/09/2022'),
        category: 'Greek'
      },
      {
        id: 1,
        title: 'Hades',
        text: 'Hades, in the ancient Greek religion and myth, is the god of the dead and the king of the underworld, with which his name became synonymous. Hades was the eldest son of Cronus and Rhea, although this also made him the last son to be regurgitated by his father.',
        author: 'Juanan',
        image: '../assets/images/Hades.webp',
        date: new Date('5/25/2020'),
        category: 'Greek'
      },
      {
        id: 2,
        title: 'Hercules',
        text: 'Hercules is the Roman equivalent of the Greek divine hero Heracles, son of Jupiter and the mortal Alcmene. In classical mythology, Hercules is famous for his strength and for his numerous far-ranging adventures.',
        author: 'Ramón',
        image: '../assets/images/Hercules.webp',
        date: new Date('5/22/2020'),
        category: 'Greek'
      },
      {
        id: 3,
        title: 'Loki',
        text: 'Loki is a god in Norse mythology. According to some sources, Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. Loki is married to Sigyn and they have two sons, Narfi and Nari or Váli. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. In the form of a mare, Loki was impregnated by the stallion Svaðilfari and gave birth to the eight-legged horse Sleipnir.',
        author: 'Cajal',
        image: '../assets/images/Loki.webp',
        date: new Date('5/03/2020'),
        category: 'Nordic'
      },
      {
        id: 4,
        title: 'Odin',
        text: 'Odin is a widely revered god in Germanic paganism. Norse mythology, the source of most surviving information about him, associates him with wisdom, healing, death, royalty, the gallows, knowledge, war, battle, victory, sorcery, poetry, frenzy, and the runic alphabet, and depicts him as the husband of the goddess Frigg.',
        author: 'Remo',
        image: '../assets/images/Odin.webp',
        date: new Date('8/01/2011'),
        category: 'Nordic'
      },
      {
        id: 5,
        title: 'Zeus',
        text: 'Zeus is the sky and thunder god in ancient Greek religion, who rules as king of the gods of Mount Olympus. His name is cognate with the first element of his Roman equivalent Jupiter. His mythology and powers are similar, though not identical, to those of Indo-European deities such as Jupiter, Perkūnas, Perun, Indra, Dyaus, and Zojz.',
        author: 'Barca',
        image: '../assets/images/zeus.webp',
        date: new Date('8/09/2012'),
        category: 'Greek'
      },
      {
        id: 6,
        title: 'Osiris',
        text: 'Osiris is the god of fertility, agriculture, the afterlife, the dead, resurrection, life, and vegetation in ancient Egyptian religion. He was classically depicted as a green-skinned deity with a pharaohs beard, partially mummy-wrapped at the legs, wearing a distinctive atef crown, and holding a symbolic crook and flail',
        author: 'Gasset',
        image: '../assets/images/Osiris.webp',
        date: new Date('8/09/2012'),
        category: 'Egyptian'
      },
      {
        id: 7,
        title: 'Anubis',
        text: 'Anubis, also known as Inpu, Inpw, Jnpw, or Anpu in Ancient Egyptian is the god of death, mummification, embalming, the afterlife, cemeteries, tombs, and the Underworld, in ancient Egyptian religion, usually depicted as a canine or a man with a canine head',
        author: 'Ortega',
        image: '../assets/images/Anubis.webp',
        date: new Date('9/10/2021'),
        category: 'Egyptian'
      },
    ]
  }

  /* Retorna la array con todos los posts */
  getAll(): Post[] {
    if (localStorage.getItem('blog')) {
      //Devuelve el valor almacenado o undefined.
      this.arrPosts = JSON.parse(localStorage.getItem('blog')!);
    }
    localStorage.setItem('blog', JSON.stringify(this.arrPosts));
    return this.arrPosts = JSON.parse(localStorage.getItem('blog')!)
  }

  /* Se le pasa el resultado del formulario por parámetro en el formulario.ts para crear un nuevo post y que aparezca, implica meter un evento click en el formulario y dentro de la función que acompaña al evento click meter el servicio pasando el $event.loquesea */
  createPost(pPost: Post) {
    this.arrPosts.push(pPost)
    localStorage.setItem('blog', JSON.stringify(this.arrPosts));
    return this.arrPosts = JSON.parse(localStorage.getItem('blog')!)
  }

  /* Se utiliza para filtrar los posts por categorias */
  getByCategories(categoria: string): Post[] {
    return this.arrPosts.filter(post => post.category === categoria
    )
  }

  /* Se utiliza para que en el select de lista-posts.html se dibujen las categorias automáticamente con un for of */
  getAllCategories(): string[] {
    this.arrCategories = this.arrPosts.map(pPost => pPost.category)
    return this.arrCategories = [...new Set(this.arrCategories)]
  }

  getById(pId: number): Post[] {
    if (localStorage.getItem('blog')) {
      //Devuelve el valor almacenado o undefined.
      this.arrPosts = JSON.parse(localStorage.getItem('blog')!);
    }
    return this.arrPosts.filter(post => post.id === pId)
  }

  removePost(pId: number): Post[] {
    this.arrPosts.splice(pId, 1)
    localStorage.setItem('blog', JSON.stringify(this.arrPosts));
    return this.arrPosts = JSON.parse(localStorage.getItem('blog')!);
  }
}
