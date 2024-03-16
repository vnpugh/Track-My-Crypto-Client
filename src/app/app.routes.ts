import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        // lazily load the HomeComponent
        loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent)
    },
];
