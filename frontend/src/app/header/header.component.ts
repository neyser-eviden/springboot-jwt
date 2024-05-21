import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../users/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout(): void {
    let username: string = this.authService.user.username;
    this.authService.logout();

    Swal.fire({
      title: 'Cerrar sesión',
      text: `${username}, has cerrado sesión con éxito`,
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
    });

    // Redirección a Componente Libros
    this.router.navigate(['/login']);
  }
}
