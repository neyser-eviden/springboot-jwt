import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { GenreService } from '../../../genders/services/genre.service';
import { Genre } from '../../../genders/models/genre';

@Component({
  selector: 'book-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  genders: Genre[] = [];

  ngOnInit(): void {
    this.serviceGenre.findAll().subscribe((genders) => {
      this.genders = genders;
    });
  }

  constructor(private serviceGenre: GenreService) {}

  titlePrincipal: string = 'Libros';

  @Input() book: Book = {
    id: 1,
    title: '',
    publication_date: '',
    genre: new Genre(),
  };

  @Output() newBookEvent = new EventEmitter();

  addBook(bookForm: NgForm): void {
    if (bookForm.valid) {
      this.newBookEvent.emit(this.book);
    }
    bookForm.resetForm();
  }

  clean(): void {
    this.book = new Book();
  }
}
