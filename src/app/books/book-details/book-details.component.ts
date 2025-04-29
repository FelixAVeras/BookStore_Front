import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/Book';
import { BackendService } from '../../service/backend.service';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../../interfaces/Author';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit{

  book!: Book;
  author!: Author;
  id!: number;
  
  constructor(private backendservice: BackendService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.getBookById(this.id);
  }

  getBookById(id: number) {
    this.backendservice.getBookById(id).subscribe(
      (response: Book) => {
        this.book = response;
        console.log('Book fetched successfully:', this.book);

        this.backendservice.getAllAuthors().subscribe((authors: Author[]) => {
          this.author = authors.find(a => a.idBook === this.book.id)!;
          console.log('Author fetched successfully:', this.author);
        });
      },
      (error) => {
        console.error('Error fetching book:', error);
      }
    );
  }

  deleteBook(id: number) {
    this.backendservice.deleteBook(id).subscribe(
      (response) => {
        console.log('Book deleted successfully');
      },
      (error) => {
        console.error('Error deleting book:', error);
      }
    );
  }
}