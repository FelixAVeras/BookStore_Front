import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/Book';
import { BackendService } from '../service/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {
  books: Book[] = [];
  constructor(private backendService: BackendService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.backendService.getAllBooks().subscribe(
      (response: Book[]) => {
        this.books = response;
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  goToDetail(id: number) {
    this.router.navigate(['/books', id]);
  }
   // Agregar
   addBook() {
    const newBook ;
    this.backendService.createBook(newBook).subscribe({
      next: (result) => console.log('Libro creado:', result),
      error: (err) => console.error(err)
    });
  }

  // Editar
  editBook() {
    const updatedBook: Book = { id: 1, title: 'Libro actualizado', author: 'Autor actualizado', publishedDate: '2025-04-29' };
    this.backendService.updateBook(1, updatedBook).subscribe({
      next: () => console.log('Libro actualizado'),
      error: (err) => console.error(err)
    });
  }

  // Eliminar
  deleteBook() {
    this.backendService.deleteBook(1).subscribe({
      next: () => console.log('Libro eliminado'),
      error: (err) => console.error(err)
    });
  }

}
