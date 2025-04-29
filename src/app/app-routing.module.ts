import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books',component:BookComponent},
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'authors',component: AuthorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
