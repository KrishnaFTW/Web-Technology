import { Routes } from '@angular/router';
import { Registration } from './registration/registration';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', component: Login },          // default page = login
  { path: 'register', component: Registration }
];