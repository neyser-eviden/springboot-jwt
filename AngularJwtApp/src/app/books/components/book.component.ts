import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {
  books: Book[] = [];

  bookSelected: Book = new Book();

  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((books) => {
      this.books = books;
    });
  }

  addBook(book: Book) {
    if (book.id > 0) {
      this.service.update(book).subscribe((bookUpdated) => {
        this.books = this.books.map((b) => {
          if (b.id == book.id) {
            return { ...bookUpdated };
          }
          return b;
        });
      });
    } else {
      this.service.create(book).subscribe((bookNew) => {
        this.books.push({ ...bookNew });
      });
    }

    this.bookSelected = new Book();
  }

  onUpdateBook(bookRow: Book) {
    this.bookSelected = { ...bookRow };
  }
  onRemoveBook(id: number): void {
    this.service.remove(id).subscribe(() => {
      this.books = this.books.filter((book) => book.id != id);
    });
  }
}
