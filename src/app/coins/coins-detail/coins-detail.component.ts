import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinInfo } from '../coin-info';
import { CoinsService } from '../coins.service';

@Component({
  selector: 'app-coins-detail',
  templateUrl: './coins-detail.component.html',
  styleUrls: ['./coins-detail.component.css']
})
export class CoinsDetailComponent implements OnInit {

  coinInfo: CoinInfo = {name:"",categories:[],description:{es:""},market_data:{current_price:0},links:{homepage:[]}};// Se puede hacer sin crear la interfaz.
  constructor(private activatedRoute: ActivatedRoute , private coinsService: CoinsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(coin => {
      //console.log(this.coinsService.getCoin(coin.id));
      this.coinsService.getCoin(coin.id).subscribe(coin => this.coinInfo=coin);
    });
  }

}
