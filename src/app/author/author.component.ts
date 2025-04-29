import { Component } from '@angular/core';
import { Author } from '../interfaces/Author';
import { BackendService } from '../service/backend.service';
import { Router } from 'express';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  authors: Author[] = [];

  constructor(private backendService: BackendService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.backendService.getAllAuthors().subscribe(
      (response: Author[]) => {
        this.authors = response;
      },
      (error) => {
        console.error('Error fetching authors:', error);
      }
    );
  }

  goToDetail(id: number) {
    // this.router.navigate(['/books', id]);
  }

}
