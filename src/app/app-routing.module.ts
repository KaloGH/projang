import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoinsDetailComponent } from './coins/coins-detail/coins-detail.component';
import { CoinsListComponent } from './coins/coins-list/coins-list.component';
import { CreacoinsComponent } from './components/creacoins/creacoins.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'coins', canActivate:[AuthGuard] , component:CoinsListComponent},
  {path: 'creacoins' , component:CreacoinsComponent },
  {path: 'coin/:id',component:CoinsDetailComponent},
  {path: 'login', component:LoginComponent},
  {path: '**', pathMatch: 'full',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
