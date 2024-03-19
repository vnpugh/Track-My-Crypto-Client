
import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
//  {
//    path: '',
//    pathMatch: 'full',
//    loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent),
//  },
//  {
//    path: 'dashboard',
//     loadComponent: () => Promise.resolve(DashboardComponent),
//    loadComponent: () => import('./features/dashboard/dashboard.component').then(c => c.DashboardComponent),
//  },

 { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent}

];


