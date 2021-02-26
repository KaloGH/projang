import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-creacoins',
  templateUrl: './creacoins.component.html',
  styleUrls: ['./creacoins.component.css']
})
export class CreacoinsComponent implements OnInit {

  formCoin: FormGroup;

  createForm(){
    this.formCoin = this.formBuilder.group(
      {
        coinName: ['DogeCoin'],
        coinPrice: 135853,
        coinDescription: ['Moneda conocida por Elon Musk'],
        coinSymbol: ['DGC']

      });
    }
    constructor(private formBuilder:FormBuilder) {
      this.createForm();
     }

  ngOnInit(): void {
  }
  create(){
    console.log('Debería añadir una moneda más.');
  }

}
