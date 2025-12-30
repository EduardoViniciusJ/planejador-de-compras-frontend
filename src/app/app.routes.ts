import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CotacoesPageComponent } from './pages/cotacoes-page/cotacoes-page.component';
import { AdicionarItemPageComponent } from './pages/adicionar-item-page/adicionar-item-page.component';
import { FornecedoresPageComponent } from './pages/fornecedores-page/fornecedores-page.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'cotacoes',
    component: CotacoesPageComponent,
    canActivate: [authGuard]
  },
  {
    path: 'adicionar-item',
    component: AdicionarItemPageComponent,
    canActivate: [authGuard]
  },
  {
    path: 'fornecedores',
    component: FornecedoresPageComponent,
    canActivate: [authGuard]
  }
];
