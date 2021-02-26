import { Component, OnInit } from '@angular/core';
import { Coin } from '../coin';
import { CoinsService } from '../coins.service';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.css']
})
export class CoinsListComponent implements OnInit {

  coins: Coin[] = [];
  criteri: string="";
  constructor(private coinsService: CoinsService) { }

  ngOnInit(): void {
    this.coinsService.getTopCoins().subscribe(coins => {
      for (const coin of coins) {//! Hago esto porque el JSON que me devuelve un Objeto Item por cada moneda
        this.coins.push(coin.item);
      }
    });
  }


}
