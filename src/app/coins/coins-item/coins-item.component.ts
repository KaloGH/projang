import { Component, Input, OnInit } from '@angular/core';
import { Coin } from '../coin';

@Component({
  selector: 'app-coins-item',
  templateUrl: './coins-item.component.html',
  styleUrls: ['./coins-item.component.css']
})
export class CoinsItemComponent implements OnInit {

  @Input() coin: Coin;

  constructor() { }

  ngOnInit(): void {
  }

}
