import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICoin } from './icoin';


@Component({
  selector: 'app-creacoins',
  templateUrl: './creacoins.component.html',
  styleUrls: ['./creacoins.component.css']
})
export class CreacoinsComponent implements OnInit {

  coin!: ICoin; //No servix per a res
  formCoin: FormGroup;

  createForm(){
    this.formCoin = this.formBuilder.group(
      {
        coinName: ['DogeCoin' , [Validators.required, // un array de validadors
                                Validators.minLength(4),
                                Validators.pattern('.*[a-zA-Z].*')]],
        coinPrice: [135853,this.tempValidator],
        coinDescription: ['Moneda conocida por Elon Musk'],
        coinSymbol: ['DGC']

      });
    }
    constructor(private formBuilder:FormBuilder ,private activatedRoute: ActivatedRoute,) {
      this.createForm();
     }

  ngOnInit(): void {

  }
  create(){
    console.log('Debería añadir una moneda más.');
  }

  tempValidator: ValidatorFn =
  (control: AbstractControl): ValidationErrors | null => {

    console.log(control.value);
    return control.value < 600 ? null :{tempValidator: true};
    return null;
    // const price = control.get('coinPrice');

    // return price.value < 600 ? null : {tempValidator: true};
  };

  get priceValid(){
    return this.formCoin.get('coinPrice');
  }

}
