import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppLayoutComponent } from './core/layout/app.layout.component';
export const routes: Routes = [
  { path: '',
    component: AppLayoutComponent,
    children: [{ path: '', component: HomeComponent }]},
];
