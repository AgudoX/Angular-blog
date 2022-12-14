import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  { path: '', component: ListaPostsComponent },
  { path: 'posts', component: ListaPostsComponent },
  { path: 'blog/new', component: FormularioComponent },
  { path: 'posts/:postId', component: PostComponent },
  { path: '**', redirectTo: 'posts' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
