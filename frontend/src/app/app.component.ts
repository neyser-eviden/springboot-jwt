import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from './books/components/book.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libraryApp';
}
