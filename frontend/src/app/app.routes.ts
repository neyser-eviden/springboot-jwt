import { Routes } from '@angular/router';
import { LoginComponent } from './users/components/login.component';
import { BookComponent } from './books/components/book.component';
import { GenreComponent } from './genders/components/genre.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './users/guards/auth.guard';
import { UserComponent } from './users/components/user.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: LoginComponent},
    {path: 'book', component: BookComponent, canActivate: [authGuard]},
    {path: 'user', component: UserComponent, canActivate: [authGuard]},
    {path: 'genre', component: GenreComponent, canActivate: [authGuard]},
    {path: '**', component: NotFoundComponent}
];
