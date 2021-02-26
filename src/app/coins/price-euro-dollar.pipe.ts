import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceEuroDollar'
})
export class PriceEuroDollarPipe implements PipeTransform {

  transform(value: any): unknown {
    return `${value.eur}€ - ${value.usd}$`;
  }

}
