import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AddComponent } from './pages/add/add.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'add', component: AddComponent},
    { path: '' , redirectTo: '/home', pathMatch: 'full'}
];
