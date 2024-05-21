import { Component, OnInit } from '@angular/core';
import { Genre } from '../models/genre';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-genre',
  standalone: true,
  imports: [],
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css',
})
export class GenreComponent implements OnInit {
  title: string = 'Géneros';

  genders: Genre[] = [];

  genreSelected: Genre = new Genre();

  constructor(private service: GenreService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((genders) => {
      this.genders = genders;
    });
  }

  addGenre(genre: Genre) {
    if (genre.id > 0) {
      this.service.update(genre).subscribe((genreUpdated) => {
        this.genders = this.genders.map((b) => {
          if (b.id == genre.id) {
            return { ...genreUpdated };
          }
          return b;
        });
      });
    } else {
      this.service.create(genre).subscribe((genreNew) => {
        this.genders.push({ ...genreNew });
      });
    }

    this.genreSelected = new Genre();
  }

  onUpdateGenre(genreRow: Genre) {
    this.genreSelected = { ...genreRow };
  }
  onRemoveGenre(id: number): void {
    this.service.remove(id).subscribe(() => {
      this.genders = this.genders.filter((genre) => genre.id != id);
    });
  }
}
