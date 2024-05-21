import { Component, OnInit } from '@angular/core';
import { User } from '../services/models/user';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  title: string = 'Login';
  user: User;

  constructor(private authService: AuthService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      Swal.fire(
        'Login',
        `Hola ${this.authService.user.username} ya estas autenticado!`,
        'info'
      );
      this.router.navigate(['/']);
    }
  }

  login(): void {
    if (this.user.username == null || this.user.password == null) {
      Swal.fire({
        title: 'Error Login',
        text: 'Usuario o contaseña vacia',
        icon: 'error',
        timer: 1000,
        showConfirmButton: false,
      });
      this.user.username = '';
      this.user.password = '';
      return;
    }

    this.authService.login(this.user).subscribe(
      (response) => {
        this.authService.saveUser(response.token);
        this.authService.saveToken(response.token);
        this.authService.saveRole(response.token);

        let user = this.authService.user;

        Swal.fire({
          title: 'Login',
          text: `Hola ${user.username}`,
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
        });

        this.router.navigate(['/book']);
      },
      (err) => {
        if (err.status == 401) {
          Swal.fire({
            title: 'Error Login',
            text: 'Usuario o clave incorrecta',
            icon: 'error',
            timer: 1000,
            showConfirmButton: false,
          });
          this.user.username = '';
          this.user.password = '';
        }
      }
    );
  }
}
