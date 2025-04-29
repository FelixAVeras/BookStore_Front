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
}
