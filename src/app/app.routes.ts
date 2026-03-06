import { Routes } from '@angular/router';

 

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./components/screens/main-screen/main-screen.component').then(m => m.MainScreenComponent)
    },
];
