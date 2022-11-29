import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { Home2Component } from './home2/home2.component';
import { LoginComponent } from './login/login.component';
import { SearchGamesComponent } from './search-games/search-games.component';
import { GameDetailsComponent } from './shop/game-details/game-details.component';

const routes: Routes = [
  { path: '', component: Home2Component, data: { breadcrumb: 'Home' } },
  { path: 'server-error', component: ServerErrorComponent, data: { breadcrumb: 'Server Error' } },
  { path: 'not-found', component: NotFoundComponent, data: { breadcrumb: 'Not found' } },
  { path: 'search', component: SearchGamesComponent },
  { path: 'game/:id', component: GameDetailsComponent, data: {breadcrumb: {alias: 'productDetails'}} },
  {
    path: 'basket', loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule),
    data: { breadcrumb: 'Basket' }
  },
  {
    path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(mod => mod.CheckoutModule),
    data: { breadcrumb: 'Checkout' }
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }