import { Pipe, PipeTransform } from '@angular/core';
import { Coin } from './coin';

@Pipe({
  name: 'filterCoins'
})
export class FilterCoinsPipe implements PipeTransform {

  transform(coins: Coin[], criteri: string): Coin[] {
    criteri = criteri ? criteri.toLowerCase() : null;
    coins = criteri ? coins.filter(coin => coin.name.toLowerCase().includes(criteri)) : coins;
    return coins;
  }

}
