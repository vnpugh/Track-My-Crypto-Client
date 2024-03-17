import { Component, OnInit } from '@angular/core';

import { CryptoService } from '../../core/services/crypto.service';

@Component({
  selector: 'app-crypto',
  standalone: true,
  imports: [],
  templateUrl: './crypto.component.html',
  styleUrl: './crypto.component.css'
})
export class CryptoComponent implements OnInit {
  simplePrices: any;
  marketData: any;
  historicalData: any;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit() {

    this.cryptoService.getSimplePrice(['bitcoin', 'ethereum'], ['usd', 'eur']).subscribe({
      next: (data) => {
        this.simplePrices = data;
      },
      error: (error) => console.error(error),
    });


    this.cryptoService.getMarkets('bitcoin', 'usd').subscribe({
      next: (data) => {
        this.marketData = data;
      },
      error: (error) => console.error(error),
    });

 
    this.cryptoService.getHistoricalData('bitcoin', '30-12-2020').subscribe({
      next: (data) => {
        this.historicalData = data;
      },
      error: (error) => console.error(error),
    });
  }
}