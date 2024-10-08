import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppLayoutComponent } from './core/layout/app.layout.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
export const routes: Routes = [
  { path: '',
    component: AppLayoutComponent,
    children: [
        { path: '', component: HomeComponent },
        { path: 'portfolio', component: PortfolioComponent}

    ]},
];
