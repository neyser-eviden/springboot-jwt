import { Genre } from '../../genders/models/genre';

export class Book {
  id: number;
  title: string;
  publication_date: string;
  genre: Genre;
}
