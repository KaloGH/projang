import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from './coin';
import {map,filter} from 'rxjs/operators';
import { CoinInfo } from './coin-info';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(private http: HttpClient) { }

  topCoinsUrl = "https://api.coingecko.com/api/v3/search/trending";

  getTopCoins(): Observable<Coin[]> {
    return this.http.get<{coins: Coin[]}>(this.topCoinsUrl).pipe(map(response => response.coins));
  }

  getCoin(id:string): Observable<CoinInfo> {
    const coinUrl = "https://api.coingecko.com/api/v3/coins/"+id;
    let coinReturn;
    return this.http.get<{coinInfo: CoinInfo[]}>(coinUrl).pipe(map(response=> {
     coinReturn = response; //? Para devolver el Json de la forma correcta y legible.
      return coinReturn;
    }));

  }




}
