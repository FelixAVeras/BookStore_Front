import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  urlAPI = 'http://localhost:5271/api';

  constructor(private http: HttpClient) { }

  // Books
  getAllBooks() {
    return this.http.get<any[]>(this.urlAPI + '/books');
  }

  getBookById(id: number) {
    return this.http.get<any>(this.urlAPI + '/books/' + id);
  }

  createBook(book: any) {
    return this.http.post<any>(this.urlAPI + '/books', book);
  }

  updateBook(id: number, book: any) {
    return this.http.put<any>(this.urlAPI + '/books/' + id, book);
  }

  deleteBook(id: number) {
    return this.http.delete<any>(this.urlAPI + '/books/' + id);
  }

  // Authors
  getAllAuthors() {
    return this.http.get<any[]>(this.urlAPI + '/authors');
  }

  getAuthorById(id: number) {
    return this.http.get<any>(this.urlAPI + '/authors/' + id);
  }

  createAuthor(author: any) {
    return this.http.post<any>(this.urlAPI + '/authors', author);
  }

  updateAuthor(id: number, author: any) {
    return this.http.put<any>(this.urlAPI + '/authors/' + id, author);
  }

  deleteAuthor(id: number) {
    return this.http.delete<any>(this.urlAPI + '/authors/' + id);
  }
}
