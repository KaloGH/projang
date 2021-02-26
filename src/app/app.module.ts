import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { CoinsListComponent } from './coins/coins-list/coins-list.component';
import { CoinsItemComponent } from './coins/coins-item/coins-item.component';
import { CoinsService } from './coins/coins.service';
import { CoinsDetailComponent } from './coins/coins-detail/coins-detail.component';
import { PriceEuroDollarPipe } from './coins/price-euro-dollar.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterCoinsPipe } from './coins/filter-coins.pipe';
import { LoginComponent } from './components/login/login.component';
import { MostrarMesDirective } from './directives/mostrar-mes.directive';
import { CreacoinsComponent } from './components/creacoins/creacoins.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    CoinsListComponent,
    CoinsItemComponent,
    CoinsDetailComponent,
    PriceEuroDollarPipe,
    FilterCoinsPipe,
    LoginComponent,
    MostrarMesDirective,
    CreacoinsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CoinsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
